import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLightHelper, rectAreaLight } from 'three';
import { angleToRadians } from '../utils/angle';
import { useControls } from 'leva';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const LightNight = () => {
  // const DirectionallightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 15, 'red');

  // const spotlightRef = useRef(null);
  // useHelper(spotlightRef, SpotLightHelper, 150, 'red');
  // const { distance, intensity, angle, color } = useControls({
  //   distance: { value: 5, min: 500, max: 12000 },
  //   intensity: { value: 1, min: 0.1, max: 10 },
  //   angle: { value: Math.PI / 6, min: 0.01, max: 1 },
  // });
  const RectAreaLightRef = useRef(null);
  useHelper(RectAreaLightRef, RectAreaLightHelper);
  const { intensity, width, height, color } = useControls({
    intensity: { value: 1, min: 0, max: 20 },
    width: { value: 50, min: 20, max: 300 },
    height: { value: 50, min: 20, max: 500 },
    color: '#fff',
  });

  // const { intensity, width, height, color } = useControls({
  //   intensity: { value: 1, min: 1, max: 120 },
  //   width: { value: 3, min: 1, max: 10 },
  //   height: { value: 3, min: 1, max: 10 },
  //   color: '#363da7',
  //   angle: { value: Math.PI / 6, min: 0.01, max: 1 },
  // });

  return (
    <>
      <ambientLight args={['#404040', 1.44]} />
      <rectAreaLight
        args={['#829dff', intensity, width, height]}
        // ref={RectAreaLightRef}
        position={[0, 50, 120]}
        rotation-x={-Math.PI / 1.2}
        rotation-y={-Math.PI / 1.2}
        castShadow
      />
      <rectAreaLight
        args={['#b507af', 1.8, 209, 65]}
        position={[0, 90, -80]}
        rotation-x={-Math.PI / 1.2}
        castShadow
      />
      {/* <rectAreaLight
        args={['#d5d5d5', 1.8, width, height]}
        ref={RectAreaLightRef}
        position={[0, 120, 0]}
        rotation-x={-Math.PI / 2.4}
        castShadow
      /> */}

      {/* <rectAreaLight
        args={['#829Dff', intensity, width, height]}
        ref={RectAreaLightRef}
        position={[0, -70, -80]}
        rotation-x={Math.PI / -1.2}
        rotation-z={Math.PI / -1.2}
        castShadow
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
      {/* <spotLight
        args={['#ff8282', 1.3, 280, angleToRadians(30)]}
        position={[140, 190, 0]}
        castShadow
      />
      <spotLight
        args={['#5e7ff7', 0.2, 280, angleToRadians(30)]}
        position={[152, 150, 0]}
        castShadow
      /> */}
      {/* outdoors lights */}
      {/* <spotLight
        args={['#5061ad', 2, 2800, angleToRadians(6), 0.2]}
        position={[300, 150, 0]}
        castShadow
      />
      <spotLight
        args={['#8684c2', 2, 3300, angleToRadians(8), 0.5]}
        position={[-350, 300, 0]}
        castShadow
      />

      <spotLight
        args={['#b3a2ff', 0.8, 3500, angleToRadians(12), 0.9]}
        position={[100, 100, 0]}
        castShadow
      />
      <spotLight
        args={['#653eb8', 0.7, 2500, angleToRadians(12), 0.9]}
        position={[0, 100, 120]}
        castShadow
      />
      {/* saturn light */}
      {/* <spotLight
        args={['#a99cff', 0.2, 2800, angleToRadians(18), 1.8]}
        position={[0, -70, 0]}
        castShadow
      />
      <hemisphereLight args={['#c655cc', '#f24d89', 0.1]} /> */}
    </>
  );
};

export default LightNight;
