import { Environment, Sphere } from "@react-three/drei"
import { Gradient, LayerMaterial } from "lamina"

import * as THREE from "three"

export const background = () => {
    return <>
    <Environment preset = "sunset" />
    <Sphere scale = {[100, 100, 100]} rotation-y = {Math.PI / 2}>
    <LayerMaterial
    lighting = "physical"
    transmission = {1}
    side={THREE.backside}
    >
        <Gradient
        colorA = {"orange"}
        colorB = {"red"}
        axes = {"y"}
        start = {0}
        end = {-0.5}
        />
    </LayerMaterial>

    </Sphere>
    </>
}
