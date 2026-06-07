import { OrbitControls } from "@react-three/drei";
import { Background } from "./background";
import * as THREE from "three";
import { Jetplane } from "./Jet";

const LINE_NB_POINTS = 12000


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <mesh>
        <Jetplane />

      </mesh>
    </>
  );
};
