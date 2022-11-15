import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLightHelper } from 'three';
import { angleToRadians } from '../utils/angle';
import { useControls } from 'leva';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const Lights = () => {
  // const DirectionallightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 15, 'red');

  const spotlightRef = useRef(null);
  useHelper(spotlightRef, SpotLightHelper, 150, 'red');
  // const { distance, intensity, angle, color } = useControls({
  //   distance: { value: 5, min: 500, max: 12000 },
  //   intensity: { value: 1, min: 0.1, max: 10 },
  //   angle: { value: Math.PI / 6, min: 0.01, max: 1 },
  // });
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

      <spotLight
        // args={['#5776ff', 1.8, 5500,angleToRadians(40), 0.2]}
        args={['#b450b0', 1.2, 280, angleToRadians(20)]}
        position={[130, 150, 0]}
        castShadow
      />
      {/* old light version */}
      {/* <spotLight
        args={['#5776ff', 1.1, 3500, angleToRadians(40), 0.2]}
        position={[300, 600, 500]}
        castShadow
      /> */}
      {/* <spotLight
        args={['#c4a2ff', 1.6, 5500, angleToRadians(10), 0.2]}
        position={[-570, 170, -170]}
        castShadow
      /> */}
      {/* inner building light */}
      <spotLight
        args={['#fff1d8', 0.3, 2800, angleToRadians(10), 0.5]}
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
      <hemisphereLight args={['#c01758', '#9035eb', 0.01]} />
    </>
  );
};

export default Lights;
