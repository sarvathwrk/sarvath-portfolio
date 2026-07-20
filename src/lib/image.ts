/**
 * A single structured entry in a `srcSet` array. Structurally compatible with
 * Next.js `StaticImageData` (which also exposes `src` and `width`).
 */
type SrcSetItem = { src: string; width?: number };

/**
 * Either a raw `srcSet` string or an array of sources. Array entries are
 * normally structured `{ src, width }` objects, but callers may also pass plain
 * strings, so both are accepted.
 */
type SrcSet = string | ReadonlyArray<SrcSetItem | string>;

type LoadImageArgs = {
  src?: string;
  srcSet?: SrcSet;
  sizes?: string;
};

/**
 * Use the browser's image loading to load an image and
 * grab the `src` it chooses from a `srcSet`
 */
export async function loadImageFromSrcSet({
  src,
  srcSet,
  sizes,
}: LoadImageArgs): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const srcSetString = srcSetToString(srcSet);

    try {
      if (!src && !srcSet) {
        throw new Error('No image src or srcSet provided');
      }

      let tempImage: HTMLImageElement | null = new Image();

      if (src) {
        tempImage.src = src;
      }

      if (srcSetString) {
        tempImage.srcset = srcSetString;
      }

      if (sizes) {
        tempImage.sizes = sizes;
      }

      const onLoad = () => {
        tempImage!.removeEventListener('load', onLoad);
        const source = tempImage!.currentSrc;
        tempImage = null;
        resolve(source);
      };

      tempImage.addEventListener('load', onLoad);
    } catch (error) {
      reject(`Error loading ${srcSetString}: ${error}`);
    }
  });
}

/**
 * Convert a `srcSet` array to a plain old `srcSet` string
 */
export function srcSetToString(srcSet: SrcSet = []): string {
  if (typeof srcSet === 'string') {
    return srcSet;
  }

  return srcSet
    .map(item => {
      const { src, width } = item as SrcSetItem;
      return `${src} ${width}w`;
    })
    .join(', ');
}

/**
 * Generates a transparent png of a given width and height
 */
export async function generateImage(width = 1, height = 1): Promise<string> {
  return new Promise<string>(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    if (!ctx) throw new Error('Could not get canvas 2d context');

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    canvas.toBlob(async blob => {
      if (!blob) throw new Error('Video thumbnail failed to load');
      const image = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image);
    });
  });
}

/**
 * Use native html image `srcSet` resolution for non-html images
 */
export async function resolveSrcFromSrcSet({
  srcSet,
  sizes,
}: {
  srcSet?: SrcSet;
  sizes?: string;
}): Promise<string> {
  const stringSrcSet = srcSetToString(srcSet);

  const sources = await Promise.all(
    stringSrcSet.split(', ').map(async srcString => {
      const [src, width] = srcString.split(' ');
      const size = Number(width.replace('w', ''));
      const image = await generateImage(size);
      return { src, image, width };
    })
  );

  const fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(', ');
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });

  const output = sources.find(src => src.image === fakeSrc);
  if (!output) throw new Error(`Could not resolve src from srcSet: ${stringSrcSet}`);
  return output.src;
}
