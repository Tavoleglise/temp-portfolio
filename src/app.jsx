import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import ExperiencePhone from "./Experience-phone.jsx";
import useIsMobile from "./hooks/useIsMobile.jsx";

function App() {
  const isMobile = useIsMobile();
  return (
    <Canvas
      className="r3f"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      {!isMobile ? <Experience /> : <ExperiencePhone />}
    </Canvas>
  );
}

export default App;
