import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import { Earth } from './earth';
import { Moon } from './moon';

export const SpaceScene = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen">
        <Image src="stars-1.svg" fill alt="stars-1" />
      </div>
      <div
        id="canvas-container"
        className="absolute top-0 left-0 h-screen w-screen"
      >
        <Canvas
          camera={{
            position: [5.5, 5.5, 5.5],
            fov: 45,
            aspect:
              typeof window !== 'undefined'
                ? window.innerWidth / window.innerHeight
                : 16 / 9,
          }}
        >
          <ambientLight intensity={0.2} color="#bbbbbb" />
          <directionalLight color="#fbfbd3" position={[-2.5, 7.5, 5]} />
          <fog color="violet" near={7} far={15} />
          <Moon />
          <Earth />
        </Canvas>
      </div>
    </>
  );
};
