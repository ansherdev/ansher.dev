import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Moon = () => {
  const { scene } = useGLTF('./models/moon.glb');

  useFrame(() => {
    scene.rotateY(-0.004);
  });

  return (
    <primitive
      object={scene}
      position={[-6.5, 1.5, 3.5]}
      scale={[0.1, 0.1, 0.1]}
    ></primitive>
  );
};
