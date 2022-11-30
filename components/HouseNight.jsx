import { useLoader } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';
import { useSpring, a } from '@react-spring/three';

const HouseNight = () => {
  const model = useLoader(GLTFLoader, './models/house1122.glb');
  const { actions } = useAnimations(model.animations, model.scene);
  const [click, setClick] = useState(false);

  // console.log('House', model);
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
    actions?.fan01?.play();
    actions?.fan02?.play();
    actions?.fan03?.play();
    actions?.fan04?.play();
    actions?.fan05?.play();
    actions?.fan06?.play();
  }, []);

  // Chest open animation
  // const chestOpen = useSpring({
  //   rotation: click ? [0, -40, 0] : [0, -180, 0],
  //   position: click ? [0, -1.5, 0] : [0, 0, 0],
  // });
  return (
    <>
      <object3D
        position={[0, -40, 0]}
        rotation={[0, angleToRadians(210), 0]}
        onClick={() => setClick((prev) => !prev)}
      >
        <primitive object={model.scene} />
      </object3D>
    </>
  );
};

export default HouseNight;
