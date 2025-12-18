"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";

import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from "lucide-react";

/* -------------------- TYPES -------------------- */
export interface CardProps {
  i: number;
  title: string;
  name: string;
  Phone: string;
  icon: ReactNode;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

/* -------------------- DATA -------------------- */
const CartItems = [
  {
    id: 1,
    title: "SQUARE COMPANY",
    name: "Rahin",
    Phone: "01730792833",
    icon: <TrendingUp size={38} color="red" />,
    color: "#1f2937",
  },
  {
    id: 2,
    title: "RENATA COMPANY",
    name: "Imran",
    Phone: "01847127828",
    icon: <Antenna size={38} color="red" />,
    color: "#334155",
  },
  {
    id: 3,
    title: "ACME COMPANY",
    name: "ARIF",
    Phone: "01730792833",
    icon: <SlidersHorizontal size={38} color="red" />,
    color: "#0f172a",
  },
  {
    id: 4,
    title: "POPULER COMPANY",
    name: "KOBIR",
    Phone: "01730792833",
    icon: <Sprout size={38} color="red" />,
    color: "#1e293b",
  },
  {
    id: 5,
    title: "INCEPTA COMPANY",
    name: "AMIN",
    Phone: "01730792833",
    icon: <ChartNoAxesCombined size={38} color="red" />,
    color: "#172554",
  },
  {
    id: 6,
    title: "RADINT",
    name: "AUBDULLHA",
    Phone: "01730792833",
    icon: <VolumeOff size={38} color="red" />,
    color: "#1f2937",
  },
  {
    id: 7,
    title: "BECON COMPANY",
    name: "Rahin",
    Phone: "01730792833",
    icon: <Crosshair size={38} color="red" />,
    color: "#0f172a",
  },
];

/* -------------------- MAIN COMPONENT -------------------- */
export default function Cards() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container} className="bg-[#171d32] mt-10">
        <section className="text-white">
          {CartItems.map((item, i) => {
            const targetScale = Math.max(
              0.6,
              1 - (CartItems.length - i) * 0.02
            );

            return (
              <Card
                key={item.id}
                i={i}
                title={item.title}
                name={item.name}
                Phone={item.Phone}
                icon={item.icon}
                color={item.color}
                progress={scrollYProgress}
                range={[i * 0.1, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

/* -------------------- CARD -------------------- */
function Card({
  i,
  title,
  name,
  Phone,
  icon,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center pb-36 max-w-7xl mx-auto">
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-12vh + ${i * 18}px)`,
        }}
        className="relative -top-[25%] h-[300px] max-w-[50%]
        p-10 rounded-3xl origin-top
        bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
        border border-white/10 shadow-xl flex flex-col justify-end"
      >
        <div className="hidden md:flex absolute top-10 left-20 p-3 rounded-2xl bg-white/10 border border-white/20">
          {icon}
        </div>

        <h1 className="md:text-3xl lg:text-4xl font-semibold mb-2 ml-8 text-[20px]">
          {title}
        </h1>
        <p className="text-xl text-gray-300 ml-8 text-green-400">
          NAME: {name}
        </p>
        <p className="text-lg text-gray-400 ml-8 mb-8 mt-2">{Phone}</p>
      </motion.div>
    </div>
  );
}
