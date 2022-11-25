import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { angleToRadians } from '../utils/angle';
import { useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';
import gsap from 'gsap';

const Camera = () => {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);
  const camera = useRef();
  useHelper(camera, CameraHelper, 4, 'hotpink');

  // useFrame((state) => {
  //   if (!!orbitControlsRef.current) {
  //     const { x, y } = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(480));
  //     orbitControlsRef.current.setPolarAngle(
  //       (y - 1) * angleToRadians(295 - 18)
  //     );
  //     orbitControlsRef.current.update();
  //   }
  // });
  return (
    <>
      {/* camera={{ fov: 75, near: 0.4, far: 50 }} */}
      {/* camera={{ position: [-165, 135, -310], fov: 40 }} */}
      {/* <PerspectiveCamera makeDefault fov={[70]} position={[455, 605, -310]} /> */}
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(40)}
        maxPolarAngle={angleToRadians(95)}
        minDistance={80}
        maxDistance={200}
      />
    </>
  );
};
export default Camera;
