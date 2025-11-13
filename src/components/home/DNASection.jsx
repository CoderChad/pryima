import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DNAHelix = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 15;

    // Create DNA helix
    const helixGroup = new THREE.Group();
    const helixHeight = 20;
    const helixRadius = 3;
    const rungs = 40;

    // Strand 1 (Orange)
    const strand1Points = [];
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * helixHeight;
      const angle = (i / 100) * Math.PI * 4;
      strand1Points.push(
        new THREE.Vector3(Math.cos(angle) * helixRadius, t - helixHeight / 2, Math.sin(angle) * helixRadius)
      );
    }
    const strand1Geometry = new THREE.BufferGeometry().setFromPoints(strand1Points);
    const strand1Material = new THREE.LineBasicMaterial({ color: 0xff4a00, linewidth: 2 });
    const strand1 = new THREE.Line(strand1Geometry, strand1Material);
    helixGroup.add(strand1);

    // Strand 2 (Dark with orange tint)
    const strand2Points = [];
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * helixHeight;
      const angle = (i / 100) * Math.PI * 4 + Math.PI;
      strand2Points.push(
        new THREE.Vector3(Math.cos(angle) * helixRadius, t - helixHeight / 2, Math.sin(angle) * helixRadius)
      );
    }
    const strand2Geometry = new THREE.BufferGeometry().setFromPoints(strand2Points);
    const strand2Material = new THREE.LineBasicMaterial({ color: 0x331100, linewidth: 2 });
    const strand2 = new THREE.Line(strand2Geometry, strand2Material);
    helixGroup.add(strand2);

    // Rungs connecting the strands
    for (let i = 0; i < rungs; i++) {
      const t = (i / (rungs - 1)) * helixHeight - helixHeight / 2;
      const angle = (i / (rungs - 1)) * Math.PI * 4;

      const point1 = new THREE.Vector3(Math.cos(angle) * helixRadius, t, Math.sin(angle) * helixRadius);
      const point2 = new THREE.Vector3(Math.cos(angle + Math.PI) * helixRadius, t, Math.sin(angle + Math.PI) * helixRadius);

      const rungGeometry = new THREE.BufferGeometry().setFromPoints([point1, point2]);
      const rungMaterial = new THREE.LineBasicMaterial({ color: 0xff4a00, opacity: 0.4, transparent: true });
      const rung = new THREE.Line(rungGeometry, rungMaterial);
      helixGroup.add(rung);
    }

    scene.add(helixGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xff4a00, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff4a00, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      helixGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[600px] md:h-[700px]" />;
};

export default function DNASection() {
  const steps = [
    {
      number: 1,
      title: "Order Your Tests",
      description: "Choose genetics, at-home labs & hormones, food sensitivity, wearables, and gut microbiome testing.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
    },
    {
      number: 2,
      title: "Capture the Data",
      description: "Collect samples at home and connect your devices. Pryima ingests everything into one OS.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=400&fit=crop",
    },
    {
      number: 3,
      title: "Your Health, Decoded",
      description: "Our AI engine reads your multi-omic data to surface patterns in metabolism, recovery, gut health, and more.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    },
    {
      number: 4,
      title: "Turn Insights into Action",
      description: "Precision actions, nutrition targets, and routines you can follow daily—then re-test to track progress.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#02040A] to-[#050814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">From </span>
            <span className="text-white">Tests </span>
            <span className="text-white">to </span>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Pryima turns multi-omic tests into decoded insights and actionable daily protocols. Here's how your transformation unfolds.
          </p>
        </div>

        {/* DNA Helix with Steps */}
        <div className="relative">
          {/* DNA Helix - Center */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[400px]">
            <DNAHelix />
          </div>

          {/* Mobile DNA */}
          <div className="lg:hidden mb-12">
            <DNAHelix />
          </div>

          {/* Steps */}
          <div className="relative z-10 space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}
                >
                  <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-black/80 to-[#050814]/80 border border-[#FF4A00]/30 backdrop-blur-md shadow-xl max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF4A00] to-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF4A00]/30">
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for helix on desktop */}
                <div className="hidden lg:block w-[400px]" />

                {/* Step Image */}
                <div className="flex-1 flex justify-center">
                  <div className="relative group">
                    <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-[#FF4A00]/30 shadow-xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ filter: "grayscale(50%) sepia(30%) hue-rotate(-20deg) saturate(150%)" }}
                      />
                    </div>
                    {/* Magnifier line connecting to helix */}
                    <div
                      className={`hidden lg:block absolute top-1/2 ${
                        index % 2 === 0 ? "left-full" : "right-full"
                      } w-24 h-0.5 bg-gradient-to-r from-[#FF4A00] to-transparent`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}