import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HouseNight = () => {
  const model = useLoader(GLTFLoader, './models/house-night.glb');
  console.log(model);
  // model.scene.scale.set(0.35, 0.35, 0.35);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <>
      {/* <ambientLight args={['#ffffff33', 0.5]} /> */}
      <hemisphereLight args={['#ff676728', '#aa82ff88', 0.05]} />

      <object3D position={[0, -40, 0]}>
        <primitive object={model.scene} />
      </object3D>
    </>
  );
};

export default HouseNight;
