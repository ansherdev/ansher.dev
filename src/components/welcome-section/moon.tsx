import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Moon = () => {
  const { scene } = useGLTF('./models/moon.glb');

  scene.scale.set(0.1, 0.1, 0.1);
  scene.position.set(-6.5, 1.5, 3.5);

  useFrame(() => {
    scene.rotateY(-0.004);
  });

  return <primitive object={scene}></primitive>;
};
