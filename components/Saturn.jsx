import { useLoader } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring } from 'react-spring';

const Saturn = () => {
  const model = useLoader(GLTFLoader, './models/saturn1124.glb');
  const [click, setClick] = useState(false);
  const { actions } = useAnimations(model.animations, model.scene);

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
    <mesh onClick={() => setClick((prev) => !prev)}>
      <primitive object={model.scene} position={[4, -62, 0]} />
    </mesh>
  );
};

export default Saturn;
