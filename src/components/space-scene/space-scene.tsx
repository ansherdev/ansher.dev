import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Earth } from './earth';
import { Moon } from './moon';

export const SpaceScene = () => {
  return (
    <div
      id="space-scene-container"
      className="absolute top-0 left-0 h-screen w-full"
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
        <Moon />
        <Earth />
      </Canvas>
      <div className="stars-pattern-masking absolute top-0 left-0 h-full w-full bg-stars-pattern"></div>
    </div>
  );
};
