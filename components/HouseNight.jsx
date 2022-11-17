import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

const HouseNight = () => {
  const model = useLoader(GLTFLoader, './models/house-night.glb');
  const { actions } = useAnimations(model.animations, model.scene);

  console.log('House', model);
  // model.scene.scale.set(0.35, 0.35, 0.35);
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  useEffect(() => {
    actions?.neo01?.play();
    actions?.lantern01?.play();
    actions?.lantern02?.play();
    actions?.signboard01?.play();
    actions?.signboard02?.play();
    actions?.stop01?.play();
    actions?.stop02?.play();
    actions?.atm01?.play();
    actions?.gamebox01?.play();
    actions?.gamebox02?.play();
    actions?.banner01?.play();
    actions?.banner02?.play();
    actions?.banner03?.play();
  }, []);
  return (
    <>
      {/* <ambientLight args={['#ffffff33', 0.5]} /> */}

      <object3D position={[0, -40, 0]}>
        <primitive object={model.scene} />
      </object3D>
    </>
  );
};

export default HouseNight;
