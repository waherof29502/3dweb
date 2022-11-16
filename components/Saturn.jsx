import { useLoader } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Saturn = () => {
  const model = useLoader(GLTFLoader, './models/saturn.glb');
  // model.scene.scale.set(2, 2, 2);
  const { actions } = useAnimations(model.animations, model.scene);
  console.log('Saturn', model);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.polySurface26?.play();
  }, []);
  return (
    <>
      {/* <ambientLight args={['#ffffff', 0.05]} /> */}
      <mesh position={[0, -52, 0]}>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};

export default Saturn;
