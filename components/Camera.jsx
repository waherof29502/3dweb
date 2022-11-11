import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { angleToRadians } from '../utils/angle';

const Camera = () => {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(360));
      orbitControlsRef.current.setPolarAngle(
        (y + 2) * angleToRadians(360 - 30)
      );
      orbitControlsRef.current.update();
    }
  });
  return (
    <>
      {/* camera={{ fov: 75, near: 0.4, far: 50 }} */}
      {/* camera={{ position: [-165, 135, -310], fov: 40 }} */}
      <PerspectiveCamera makeDefault position={[315, 315, -210]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(40)}
        maxPolarAngle={angleToRadians(85)}
        minDistance={80}
        maxDistance={320}
      />
    </>
  );
};
export default Camera;