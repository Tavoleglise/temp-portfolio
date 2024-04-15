import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import ExperiencePhone from "./Experience-phone.jsx";
import useIsMobile from "./hooks/useIsMobile.jsx";

import PhoneUi from "./components/phoneUI";
import Footer from "./components/footer";

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <>
          <PhoneUi />
        </>
      ) : (
        <>
          <Canvas
            className="r3f"
            camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              position: [-3, 1.5, 4],
            }}
          >
            <Experience />
          </Canvas>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
