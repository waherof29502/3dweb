/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Cat(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/cat.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='CAT_01'
          castShadow
          receiveShadow
          geometry={nodes.CAT_01.geometry}
          material={materials['13 - Default.001']}
          position={[-20, -36.3, -33]}
          rotation={[Math.PI, 7, Math.PI]}
          scale={0.2}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/cat.glb');

export default Cat;