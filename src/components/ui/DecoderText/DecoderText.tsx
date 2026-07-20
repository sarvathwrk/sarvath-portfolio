import { VisuallyHidden } from '@/components/ui/VisuallyHidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import type { HTMLAttributes } from 'react';
import { delay } from '@/lib/delay';
import { classes } from '@/lib/style';
import styles from './DecoderText.module.css';

const glyphs = [
  'أ',
  'ب',
  'ت',
  'ث',
  'ج',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ك',
  'ل',
  'م',
  'ن',
  'ه',
  'و',
  'ي',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

interface CharItem {
  type: string;
  value: string;
}

function shuffle(content: string[], output: CharItem[], position: number): CharItem[] {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    // Fall back to a random glyph when there is no previous output for this
    // index yet (the spring's first tick can land here before `output` has
    // been filled to the full content length).
    if (position % 1 < 0.5 || !output[index]) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export interface DecoderTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  start?: boolean;
  delay?: number;
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }: DecoderTextProps) => {
    const output = useRef<CharItem[]>([{ type: CharType.Glyph, value: '' }]);
    const container = useRef<HTMLSpanElement | null>(null);
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation: boolean | undefined;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance!.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
