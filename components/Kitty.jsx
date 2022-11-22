import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';

const Kitty = () => {
  const model = useLoader(GLTFLoader, './models/kitty02.glb');
  const { actions } = useAnimations(model.animations, model.scene);

  console.log('Kitty', model);
  // model.scene.scale.set(0.35, 0.35, 0.35);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.Action?.play();
  }, []);
  return (
    <>
      <object3D position={[0, -40, 0]} rotation={[0, angleToRadians(210), 0]}>
        <primitive object={model.scene} />
      </object3D>
    </>
  );
};

export default Kitty;
