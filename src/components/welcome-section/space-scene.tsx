import { Canvas } from '@react-three/fiber';
import { Earth } from 'components/welcome-section/earth';
import { Moon } from 'components/welcome-section/moon';

export const SpaceScene = () => {
  return (
    <div id="canvas-container" className="fixed top-0 left-0 h-screen w-screen">
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

        {/* <OrbitControls /> */}
        {/* <axesHelper args={[5]} /> */}
        {/* <gridHelper /> */}
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
};
