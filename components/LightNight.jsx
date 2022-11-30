import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLightHelper, rectAreaLight } from 'three';
import { angleToRadians } from '../utils/angle';
import { useControls } from 'leva';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const LightNight = () => {
  const DirectionalLightRef = useRef(null);
  useHelper(DirectionalLightRef, DirectionalLightHelper, 15, 'red');

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
      <ambientLight args={['#404040', 2]} />
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
      {/* <ambientLight args={['#ffffff', 0.1]} /> */}
      {/* test light */}
      <directionalLight
        position={[-10, 100, 40]}
        ref={DirectionalLightRef}
        intensity={0.45}
        shadow-mapSize-height={10}
        shadow-mapSize-width={10}
        castShadow
      />
      {/* current light vision */}
      {/* <spotLight
        args={['#ff8282', 0.3, 280, angleToRadians(30)]}
        position={[140, 190, 0]}
      />
      <spotLight
        args={['#5e7ff7', 0.4, 280, angleToRadians(30)]}
        position={[152, 150, 0]}
      />
      {/* outdoors lights */}
      {/* <spotLight
        args={['#5061ad', 0.2, 2800, angleToRadians(6), 0.2]}
        position={[300, 150, 0]}
        castShadow
      />
      <spotLight
        args={['#8684c2', 0.2, 3300, angleToRadians(8), 0.5]}
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
      /> */}
      {/* saturn light */}
      <spotLight
        args={['#a99cff', 0.7, 800, angleToRadians(24), 0.2]}
        position={[0, -90, 0]}
        castShadow
      />

      {/* <hemisphereLight args={['#829dff', '#ff72fa', 0.031]} /> */}
    </>
  );
};

export default LightNight;
