import { useTexture } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';

const Ground = () => {
  const matcap = useTexture('./matcaps/matcaps9.png');
  return (
    <>
      {/* <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[3000, 3000]} />
        <meshStandardMaterial color={'#60e9475'} />
        <meshMatcapMaterial
          matcap={matcap}
          flatShading={true}
          transparent={true}
        />
      </mesh> */}
      {/* <mesh rotation-x={360} receiveShadow position={[-50, -50, -50]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color='#4a86e0' />
      </mesh> */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} position={[0, -40, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color='#0f0d16' />
      </mesh>
    </>
  );
};

export default Ground;

// import { useLoader } from '@react-three/fiber';
// import React, { useState, useEffect } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const Ground = () => {
//   const model = useLoader(GLTFLoader, './models/floor.glb');
//   // model.scene.scale.set(0.5, 0.5, 0.5);
//   model.scene.traverse((object) => {
//     if (object.isMesh) {
//       object.castShadow = true;
//     }
//   });
//   return (
//     <object3D position={[0, 0, -60]}>
//       <primitive object={model.scene} />
//     </object3D>
//   );
// };

// export default Ground;
