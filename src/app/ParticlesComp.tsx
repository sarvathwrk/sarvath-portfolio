import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { useMemo } from 'react';

// tsparticles v4: the provider registers the engine plugins once and gates
// rendering of <Particles> until the engine is loaded.
const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

const ParticlesComp = () => {
  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      background: {},
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'repulse',
            distance: 400,
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 0,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#cacaca',
        },
        links: {
          color: '#cacaca',
          distance: 120,
          enable: true,
          opacity: 0.1,
          width: 0.3,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1200,
            height: 1200,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={initEngine}>
      <div className="w-full h-full">
        <Particles className="w-full h-screen" id="tsparticles" options={options} />
      </div>
    </ParticlesProvider>
  );
};

export default ParticlesComp;
