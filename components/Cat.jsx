/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Cat(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/cat2.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions?.cat?.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='Armature'
          rotation={[Math.PI / 2, 0, -0.5]}
          scale={0.25}
          position={[33.2, -36.3, 20]}
        >
          <primitive object={nodes.Bip_01} />
          <skinnedMesh
            name='CAT_01'
            geometry={nodes.CAT_01.geometry}
            material={materials['13 - Default']}
            skeleton={nodes.CAT_01.skeleton}
          />
          <skinnedMesh
            name='CAT_01001'
            geometry={nodes.CAT_01001.geometry}
            material={materials.Material}
            skeleton={nodes.CAT_01001.skeleton}
          />
          <skinnedMesh
            name='CAT_01002'
            geometry={nodes.CAT_01002.geometry}
            material={materials.Material}
            skeleton={nodes.CAT_01002.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/cat2.glb');
export default Cat;
