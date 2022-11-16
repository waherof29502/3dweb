import { useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mailbox = () => {
  const model = useLoader(GLTFLoader, './models/mailbox-1116.glb');
  const { actions } = useAnimations(model.animations, model.scene);
  console.log(model);
  model.scene.scale.set(0.8, 0.8, 0.8);
  model.scene.position.set(17, -35, -13);
  model.scene.rotation.set(0, 0, 0);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.move_01?.play();
  }, []);
  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Mailbox;
