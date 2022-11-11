import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HouseNight = () => {
  const model = useLoader(GLTFLoader, './models/Hank_stroking_New.glb');
  // model.scene.scale.set(0.5, 0.5, 0.5);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <object3D position={[100, 100, 100]}>
      <primitive object={model.scene.clone()} />
    </object3D>
  );
};

export default HouseNight;
