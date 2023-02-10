import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Earth = () => {
  const { scene } = useGLTF('./models/earth.glb');

  scene.scale.set(2, 2, 2);
  scene.position.set(5, 0, -2.2);
  scene.rotation.z = 0.5;

  useFrame(() => {
    scene.rotateY(0.001);
  });

  // const isMouseDown = useRef<boolean>(false);

  // const onMouseDown = () => {
  //   isMouseDown.current = true;
  // };

  // const onMouseUp = () => {
  //   isMouseDown.current = false;
  // };

  // const onMouseMove = useCallback(
  //   (event: MouseEvent) => {
  //     if (!isMouseDown.current) {
  //       return;
  //     }

  //     event.preventDefault();

  //     scene.rotateY(0.001);
  //   },
  //   [scene]
  // );

  // useEffect(() => {
  //   window.addEventListener('mousedown', onMouseDown);
  //   window.addEventListener('mouseup', onMouseUp);
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousedown', onMouseDown);
  //     window.removeEventListener('mouseup', onMouseUp);
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, [onMouseMove]);

  return <primitive object={scene}></primitive>;
};
