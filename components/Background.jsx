import * as THREE from 'three';
import { Environment } from '@react-three/drei';

const Background = () => {
  return (
    <>
      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color='#0f0d16' side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default Background;
