import { useThree } from 'react-three-fiber';
import { useSpring } from 'react-spring';
import { OrbitControls } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';
import { useEffect } from 'react';

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  useSpring({
    from: {
      z: 0,
    },
    x: 0,
    y: 10,
    z: 50,
    // React Springs onFrame
    onFrame: ({ x, y, z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    },
  });
  return (
    // Oribital controls via drei
    <OrbitControls
      minPolarAngle={angleToRadians(40)}
      maxPolarAngle={angleToRadians(89.4)}
      minDistance={100}
      maxDistance={180}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

export default ZoomWithOrbital;
