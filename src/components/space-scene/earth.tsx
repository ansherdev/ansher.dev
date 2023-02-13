import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export const Earth = () => {
  const { scene } = useGLTF('./models/earth.glb');

  useFrame(() => {
    scene.rotateY(0.001);
  });

  return (
    <primitive
      object={scene}
      position={[5, 0, -2.2]}
      scale={[2, 2, 2]}
      rotation={[0, 0, 0.5]}
    ></primitive>
  );
};
