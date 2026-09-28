import React from 'react';
import { useGLTF } from '@react-three/drei';

const ModelComponent = ({ hovered, setHovered }) => {
  let model = null;
  
  try {
    // Try to load model
    const { scene } = useGLTF('/model.glb');
    model = scene;
  } catch (error) {
    // Use default if model fails
    model = null;
  }

  if (model) {
    return (
      <primitive 
        object={model} 
        scale={1.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    );
  }

  // Default lightweight model
  return (
    <group>
      <mesh 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={hovered ? "#0088ff" : "#0066ff"}
          metalness={0.7}
          roughness={0.2}
          emissive={hovered ? "#0066ff" : "#0033aa"}
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshBasicMaterial
          color="#0066ff"
          wireframe={true}
          transparent={true}
          opacity={0.05}
        />
      </mesh>
    </group>
  );
};

export default ModelComponent;