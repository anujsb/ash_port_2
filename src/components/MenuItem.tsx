"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  name: string;
  color: string;
  badges: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, color, badges }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [-15, 15]);
  const rotateY = useTransform(x, [-100, 100], [15, -15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          className={`absolute w-[280px] h-[200px] -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${color} flex items-center justify-center p-4 rounded-lg shadow-md`}
          style={{
            transformPerspective: 1000,
          }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div> */}

      <motion.span
        className="block text-5xl py-4 group-hover:text-opacity-25 transition-all duration-300"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

const Menu: React.FC = () => {
  const menuItems: MenuItemProps[] = [
    {
      name: " Front-End",
      color: "bg-red-500/50",
      badges: [
        "React",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "UX Design",
      color: "bg-blue-500/50",
      badges: [
        "Node.js",
        "MongoDB",
        "Prisma",
        "RESTful APIs",
        "MySQL",
        "Express",
      ],
    },
    {
      name: "Data Science ",
      color: "bg-green-500/50",
      badges: ["JavaScript", " C++", "Java", "Python", "Git", "PyCharm"],
    },
    {
      name: "Python",
      color: "bg-purple-500/70",
      badges: ["NLP", "LLM", "SaaS", "Machine Learning"],
    },
  ];

  return (
    <div className="w-full">
      <nav className="flex flex-col space-x-8 w-full">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
