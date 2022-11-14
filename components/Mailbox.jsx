import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mailbox = () => {
  const model = useLoader(GLTFLoader, './models/mailbox.glb');
  model.scene.scale.set(0.8, 0.8, 0.8);
  model.scene.position.set(60, -38, 25);
  model.scene.rotation.set(0, -29.9, 0);
  console.log('mailbox', model);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Mailbox;
