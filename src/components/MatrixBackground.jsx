'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function MatrixBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: '#0a0a0a',
        },
      },
      particles: {
        color: {
          value: ['#a855f7', '#d946ef', '#7c3aed'],
        },
        move: {
          direction: 'bottom',
          enable: true,
          speed: { min: 2, max: 6 },
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
        },
        opacity: {
          value: { min: 0.3, max: 0.9 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}