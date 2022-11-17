import { useLoader } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Saturn = () => {
  const model = useLoader(GLTFLoader, './models/saturn02.glb');
  // model.scene.scale.set(2, 2, 2);
  const { actions } = useAnimations(model.animations, model.scene);
  console.log('Saturn', model);

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
      <ambientLight args={['#ffffff', 0.08]} />

      <mesh position={[4, -62, 0]}>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};

export default Saturn;
