import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Float } from "@react-three/drei";
import { Background } from "./background";
import * as THREE from "three";
import { Jetplane } from "./Jet";

const LINE_NB_POINTS = 12000;

export const Experience = () => {
  const planeRef = useRef();
  const curve = useMemo(() => { 
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false, 
      "catmullrom",
      0.5
    );
  }, []); 

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);


  
  useFrame(() => {
    if (planeRef.current) {
      const cameraPosition = new THREE.Vector3(0, 2, 8);
      cameraPosition.applyQuaternion(planeRef.current.quaternion);
      cameraPosition.add(planeRef.current.position);
      
      const camera = window.__camera; 
    }
  });

  return (
    <>
      <PerspectiveCamera 
        position={[0, 2, 8]} 
        fov={60} 
        makeDefault 
      />
      <Background />
      
      <Float ref={planeRef} floatIntensity={3} speed={5}>
        <Jetplane 
          rotation-y={Math.PI } 
          scale={[0.4, 0.4, 0.5]} 
          position-y={-0.5} 
        />
      </Float>
    </>
  );
};