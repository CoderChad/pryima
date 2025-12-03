import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const DNAHelix = ({ highlightedRung, onRungHover }) => {
  const mountRef = useRef(null);
  const helixGroupRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 25;

    // Create DNA helix - MUCH LARGER
    const helixGroup = new THREE.Group();
    helixGroupRef.current = helixGroup;
    const helixHeight = 40; // Doubled from 20
    const helixRadius = 4; // Increased from 3
    const rungs = 50; // Increased from 40

    // Strand 1 (Orange)
    const strand1Points = [];
    for (let i = 0; i <= 150; i++) {
      const t = (i / 150) * helixHeight;
      const angle = (i / 150) * Math.PI * 5;
      strand1Points.push(
        new THREE.Vector3(Math.cos(angle) * helixRadius, t - helixHeight / 2, Math.sin(angle) * helixRadius)
      );
    }
    const strand1Geometry = new THREE.BufferGeometry().setFromPoints(strand1Points);
    const strand1Material = new THREE.LineBasicMaterial({ color: 0xff4a00, linewidth: 3 });
    const strand1 = new THREE.Line(strand1Geometry, strand1Material);
    helixGroup.add(strand1);

    // Strand 2 (Dark with orange tint)
    const strand2Points = [];
    for (let i = 0; i <= 150; i++) {
      const t = (i / 150) * helixHeight;
      const angle = (i / 150) * Math.PI * 5 + Math.PI;
      strand2Points.push(
        new THREE.Vector3(Math.cos(angle) * helixRadius, t - helixHeight / 2, Math.sin(angle) * helixRadius)
      );
    }
    const strand2Geometry = new THREE.BufferGeometry().setFromPoints(strand2Points);
    const strand2Material = new THREE.LineBasicMaterial({ color: 0x331100, linewidth: 3 });
    const strand2 = new THREE.Line(strand2Geometry, strand2Material);
    helixGroup.add(strand2);

    // Rungs connecting the strands - store them for highlighting
    const rungMeshes = [];
    for (let i = 0; i < rungs; i++) {
      const t = (i / (rungs - 1)) * helixHeight - helixHeight / 2;
      const angle = (i / (rungs - 1)) * Math.PI * 5;

      const point1 = new THREE.Vector3(Math.cos(angle) * helixRadius, t, Math.sin(angle) * helixRadius);
      const point2 = new THREE.Vector3(Math.cos(angle + Math.PI) * helixRadius, t, Math.sin(angle + Math.PI) * helixRadius);

      const rungGeometry = new THREE.BufferGeometry().setFromPoints([point1, point2]);
      const rungMaterial = new THREE.LineBasicMaterial({ color: 0xff4a00, opacity: 0.4, transparent: true, linewidth: 2 });
      const rung = new THREE.Line(rungGeometry, rungMaterial);
      rung.userData = { index: i };
      helixGroup.add(rung);
      rungMeshes.push(rung);
    }

    // Highlight specific rungs based on highlightedRung prop
    rungMeshes.forEach((rung, index) => {
      if (highlightedRung !== null && index === highlightedRung) {
        rung.material.opacity = 1;
        rung.material.color.setHex(0xffaa00);
        rung.material.linewidth = 4;
      } else {
        rung.material.opacity = 0.4;
        rung.material.color.setHex(0xff4a00);
        rung.material.linewidth = 2;
      }
    });

    scene.add(helixGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xff4a00, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff4a00, 1.5, 100);
    pointLight.position.set(15, 15, 15);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff4a00, 0.8, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      helixGroup.rotation.y += 0.003;
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
  }, [highlightedRung]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default function DNASection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Order Your Tests",
      description: "Choose genetics, at-home labs & hormones, food sensitivity, wearables, and gut microbiome testing.",
      rungIndex: 10,
    },
    {
      number: 2,
      title: "Capture the Data",
      description: "Collect samples at home and connect your devices. Pryima ingests everything into one OS.",
      rungIndex: 22,
    },
    {
      number: 3,
      title: "Your Health, Decoded",
      description: "Our AI engine reads your multi-omic data to surface patterns in metabolism, recovery, gut health, and more.",
      rungIndex: 34,
    },
    {
      number: 4,
      title: "Turn Insights into Action",
      description: "Precision actions, nutrition targets, and routines you can follow daily—then re-test to track progress.",
      rungIndex: 45,
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
        <div className="relative min-h-[1800px] lg:min-h-[2000px]">
          {/* DNA Helix - Center - MUCH LARGER */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1800px]">
            <DNAHelix highlightedRung={hoveredStep !== null ? steps[hoveredStep].rungIndex : null} />
            {/* Inserted Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-80 mix-blend-screen">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/0b8efea0d_20250914_2023_BlackBackgroundLogo_remix_01k55fe37weqq81p9zc23pxbc61.png" 
                    alt="Pryima Logo" 
                    className="w-[600px] h-[600px] object-contain animate-pulse-slow"
                    />
            </div>
          </div>

          {/* Mobile DNA */}
          <div className="lg:hidden mb-12 h-[600px]">
            <DNAHelix highlightedRung={null} />
          </div>

          {/* Steps - Positioned absolutely with more space */}
          <div className="relative z-10 lg:absolute lg:inset-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`lg:absolute mb-12 lg:mb-0 ${
                  index % 2 === 0 ? "lg:left-0 lg:right-auto" : "lg:right-0 lg:left-auto"
                }`}
                style={{
                  top: `${index * 450 + 100}px`,
                  width: "calc(50% - 280px)",
                }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Card */}
                <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-black/80 to-[#050814]/80 border border-[#FF4A00]/30 backdrop-blur-md shadow-xl max-w-md hover:border-[#FF4A00] hover:shadow-2xl hover:shadow-[#FF4A00]/30 transition-all duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF4A00] to-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF4A00]/30">
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Peephole magnifier - positioned to point at helix */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                }`}>
                  <div className="relative" style={{ width: "280px" }}>
                    {/* Connection line */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-${index % 2 === 0 ? "r" : "l"} from-[#FF4A00] to-transparent ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      }`}
                      style={{ width: "200px" }}
                    />
                    
                    {/* Magnifier circle */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "right-16" : "left-16"
                      }`}
                    >
                      <div className="w-24 h-24 rounded-full border-4 border-[#FF4A00] bg-black/60 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#FF4A00]/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4A00]/20 to-transparent" />
                        <div className="relative z-10 text-center">
                          <div className="w-3 h-3 bg-[#FF4A00] rounded-full mx-auto mb-1 animate-pulse" />
                          <div className="text-[11px] text-[#FF4A00] font-bold">RUNG {step.rungIndex}</div>
                        </div>
                      </div>
                    </div>
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