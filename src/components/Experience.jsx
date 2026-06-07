import { OrbitControls } from "@react-three/drei";
import { background } from "./background";
import * as THREE from "three";
import { jet } from "./Jet";

const LINE_NB_POINTS = 12000


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />

    </>
  );
};
