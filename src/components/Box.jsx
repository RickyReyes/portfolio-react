import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshNormalMaterial color={0x006849} />
    </mesh>
  );
};

export default Box;
