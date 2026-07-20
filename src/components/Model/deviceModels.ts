import iphone11 from '@/assets/iphone-11.glb';
import macbookPro from '@/assets/macbook-pro.glb';

/**
 * Entrance animation variants for a device model. Exposed as both a runtime
 * value (for equality checks) and a type (the union of its values).
 */
export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
} as const;

export type ModelAnimationType =
  (typeof ModelAnimationType)[keyof typeof ModelAnimationType];

/**
 * A 3D position in scene space.
 */
export interface Vector3Like {
  x: number;
  y: number;
  z: number;
}

/**
 * Static configuration for a device model (geometry source + entrance
 * animation). The screen `texture` is supplied by the consumer at render time.
 */
export interface DeviceModelConfig {
  url: string;
  width: number;
  height: number;
  position: Vector3Like;
  animation: ModelAnimationType;
}

export const deviceModels: Record<string, DeviceModelConfig> = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
  // desktop: {
  //   url: macbookPro,
  //   width: 1280,
  //   height: 800,
  //   position: { x: 0, y: 0, z: 0 },
  //   animation: ModelAnimationType.SpringUp,
  // },
};
