import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { angleToRadians } from '../utils/angle';

const Lights = () => {
  const lightRef = useRef();

  useHelper(lightRef, DirectionalLightHelper, 15, 'red');
  return (
    <>
      {/* <ambientLight args={['#ffffff', 0.5]} /> */}
      {/* test light */}
      {/* <directionalLight
        ref={lightRef}
        position={[50, 50, 30]}
        castShadow
        shadow-mapSize-height={100}
        shadow-mapSize-width={100}
      /> */}
      <spotLight
        args={['#5776ff', 1.2, 3000, angleToRadians(40), 0.2]}
        ref={lightRef}
        position={[100, 100, 50]}
        castShadow
      />
      <spotLight
        args={['#c4a2ff', 0.6, 3200, angleToRadians(10), 0.2]}
        position={[-570, 170, -170]}
        castShadow
      />
      {/* inner building light */}
      <spotLight
        args={['#ff5858', 2, 2800, angleToRadians(10), 0.5]}
        position={[30, 170, 10]}
        castShadow
      />
      {/* <spotLight
        args={['#8b3ed3', 0.2, 1800, angleToRadians(10), 0.5]}
        position={[30, 20, 10]}
        castShadow
      /> */}
      {/* <spotLight
        args={['#ffffff', 1.5, 7, 45, 0.4]}
        position={[300, 300, 300]}
        castShadow
      /> */}
      {/* <hemisphereLight args={['#c01758', '#9035eb', 0.1]} /> */}
    </>
  );
};

export default Lights;
