import { Cache, TextureLoader } from 'three';
import type {
  Light,
  Material,
  Mesh,
  Object3D,
  Scene,
  Texture,
  WebGLRenderer,
} from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

// Enable caching for all loaders
Cache.enabled = true;

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;
export const textureLoader = new TextureLoader();

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = (scene?: Scene | null): void => {
  scene?.traverse(object => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;

    mesh.geometry.dispose();

    if ((mesh.material as Material).isMaterial) {
      cleanMaterial(mesh.material as Material);
    } else {
      for (const material of mesh.material as Material[]) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = (material: Material): void => {
  material.dispose();

  for (const key of Object.keys(material)) {
    const value = (material as unknown as Record<string, unknown>)[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      const texture = value as Texture;
      texture.dispose();

      // Close GLTF bitmap textures
      (texture.source?.data as { close?: () => void } | undefined)?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = (renderer: WebGLRenderer | null): void => {
  renderer?.dispose();
  renderer = null;
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = (lights: Light[]): void => {
  for (const light of lights) {
    light.parent?.remove(light);
  }
};

/**
 * Get child by name
 */
export const getChild = (name: string, object: Object3D): Object3D | undefined => {
  let node: Object3D | undefined;

  object.traverse(child => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};
