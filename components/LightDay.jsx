import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLightHelper } from 'three';
import { angleToRadians } from '../utils/angle';
import { useControls } from 'leva';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const LightDay = () => {
  // const DirectionallightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 15, 'red');

  // const spotlightRef = useRef(null);
  // useHelper(spotlightRef, SpotLightHelper, 150, 'red');
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
      <ambientLight args={['#404040', 6]} />
      <rectAreaLight
        args={['#5478fc', 1.8, 200, 55]}
        // ref={RectAreaLightRef}
        position={[80, 0, 100]}
        rotation-x={-Math.PI / -1.2}
        rotation-y={-Math.PI / 0.2}
      />
      <rectAreaLight
        args={['#b507af', 1.72, 209, 65]}
        position={[0, 90, -80]}
        rotation-x={-Math.PI / 1.2}
      />
      <directionalLight
        position={[-10, 100, 40]}
        intensity={0.45}
        shadow-mapSize-height={10}
        shadow-mapSize-width={10}
        castShadow
      />
    </>
  );
};

export default LightDay;
