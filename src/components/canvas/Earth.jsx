import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // State to manage responsive scale
  const [scale, setScale] = useState(window.innerWidth < 768 ? 1.5 : 2.5);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      const newScale = window.innerWidth < 768 ? 1.5 : 2.5;
      setScale(newScale);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <primitive
      object={earth.scene}
      scale={scale} // Use responsive scale
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]} // Device pixel ratio for sharper rendering
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
      style={{ width: "100%", height: "100%" }} // Full container responsiveness
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Orbit Controls */}
        <OrbitControls
          autoRotate
          enableZoom={true} // Allow zoom for better interaction
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        {/* Preload assets */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
