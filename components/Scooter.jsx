import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

const Scooter = () => {
  const model = useLoader(GLTFLoader, './models/scooter.glb');
  const { actions } = useAnimations(model.animations, model.scene);

  console.log('Scooter', model);
  // model.scene.scale.set(0.35, 0.35, 0.35);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.move011?.play();
    actions?.move012?.play();
    actions?.move013?.play();
    actions?.move014?.play();
  }, []);
  return (
    <>
      <object3D position={[10, -40, 25]}>
        <primitive object={model.scene} />
      </object3D>
    </>
  );
};

export default Scooter;
