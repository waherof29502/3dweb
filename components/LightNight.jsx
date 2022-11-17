import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLightHelper } from 'three';
import { angleToRadians } from '../utils/angle';
import { useControls } from 'leva';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const LightNight = () => {
  // const DirectionallightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 15, 'red');

  const spotlightRef = useRef(null);
  useHelper(spotlightRef, SpotLightHelper, 150, 'red');
  const { distance, intensity, angle, color } = useControls({
    distance: { value: 5, min: 500, max: 12000 },
    intensity: { value: 1, min: 0.1, max: 10 },
    angle: { value: Math.PI / 6, min: 0.01, max: 1 },
  });
  // const rectAreaLightRef = useRef(null);
  // useHelper(rectAreaLightRef, RectAreaLightHelper, 'red');

  // const { intensity, width, height, color } = useControls({
  //   intensity: { value: 1, min: 1, max: 120 },
  //   width: { value: 3, min: 1, max: 10 },
  //   height: { value: 3, min: 1, max: 10 },
  //   color: '#363da7',
  //   angle: { value: Math.PI / 6, min: 0.01, max: 1 },
  // });

  return (
    <>
      {/* <rectAreaLight
        ref={rectAreaLightRef}
        args={[color, intensity, width, height]}
        position={[450, 590, 100]}
        rotation-x={-Math.PI / 2}
      /> */}
      {/* <ambientLight args={['#ffffff', 0.1]} /> */}
      {/* test light */}
      {/* <directionalLight
        position={[50, 50, 30]}
        castShadow
        shadow-mapSize-height={100}
        shadow-mapSize-width={100}
      /> */}

      {/* current light vision */}
      <spotLight
        args={['#ff8282', 1.3, 280, angleToRadians(30)]}
        position={[140, 190, 0]}
        castShadow
      />
      <spotLight
        args={['#5e7ff7', 1.3, 280, angleToRadians(30)]}
        position={[152, 150, 0]}
        castShadow
      />

      {/* outdoors lights */}
      <spotLight
        args={['#5061ad', 4, 2800, angleToRadians(10), 0.2]}
        position={[-100, 150, 0]}
        castShadow
      />
      <spotLight
        args={['#202b2f', 1, 500, angleToRadians(30), 0.5]}
        position={[0, -400, 0]}
        castShadow
      />

      <spotLight
        args={['#b3a2ff', 2.3, 3500, angleToRadians(12), 0.9]}
        position={[100, 100, 0]}
        castShadow
      />
      <spotLight
        args={['#653eb8', 1.3, 2500, angleToRadians(12), 0.9]}
        position={[0, 100, 120]}
        castShadow
      />
      {/* inner building light */}
      <spotLight
        args={['#eeaa34', 0.2, 2800, angleToRadians(30), 1.5]}
        position={[30, 170, 10]}
        castShadow
      />

      <hemisphereLight args={['#c01758', '#9035eb', 0.034]} />
    </>
  );
};

export default LightNight;
