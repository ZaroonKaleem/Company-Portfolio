import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { BufferGeometry, Points as ThreePoints } from "three";

const Stars = (props: any) => {
  const ref = useRef<ThreePoints<BufferGeometry> | null>(null);

  // Generate valid position values
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 2 });
    return Array.from(positions).map((value) => (isNaN(value) ? 0 : value)); // Ensure no NaN values
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
