import { useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { angleToRadians } from '../utils/angle';

const Mailbox = () => {
  const model = useLoader(GLTFLoader, './models/mailbox1124.glb');
  const { actions } = useAnimations(model.animations, model.scene);
  // console.log('Mailbox', model);
  const [click, setClick] = useState(false);
  model.scene.scale.set(0.8, 0.8, 0.8);
  model.scene.position.set(17, -35, 13);
  model.scene.rotation.set(0, 0, 0);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.move011?.play();
    actions?.move012?.play();
    actions?.move013?.play();
    actions?.move021?.play();
    actions?.move022?.play();
    actions?.move023?.play();
  }, []);
  return (
    <mesh
      rotation={[0, angleToRadians(210), 0]}
      onClick={(e) => setClick(!click)}
    >
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Mailbox;
