import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import useIsMobile from "./hooks/useIsMobile";

export default function ExperiencePhone() {
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  const isMobile = useIsMobile();

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.3, 5]}
        fov={45}
        near={0.1}
        far={2000}
      />
      <color args={["#241a1a"]} attach="background" />
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            object={phone.scene}
            position={[0 - 0.1, -1.2, 0]}
            // rotation-x={ 0.13 }
          >
            <Html
              transform
              wrapperClass="htmlScreen htmlScreen-phone"
              distanceFactor={1.17}
              position={[0.15, 1.35, 0.1]}
            >
              <iframe src="https://portfolio2d-three.vercel.app/" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
