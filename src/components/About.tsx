// import React from "react";
// import Menu from "./MenuItem";

// const About = () => {
//   return (
//     <div id="About" className="min-h-screen bg-white">
//       <div>
//         <section className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 relative">
//           <div className="absolute hidden lg:block right-0 top-32 w-64 h-64 lg:w-96 lg:h-96">
//             <div className="w-full h-full border-r-[3px] border-neutral-400 rounded-br-[500px]" />
//           </div>
//           <div className="mb-8 w-2/3">
//             As a passionate Computer Engineering student, I bring adaptability
//             and a strong foundation in technology to contribute effectively to
//             the Software Project. With proficiency in UI/UX design using tools
//             like Figma and a solid understanding of data science, I assure
//             dedication to project guidelines and professionalism throughout. My
//             technical skills and commitment make me a strong fit for this role.
//           </div>

//           <div className="space-y-12 md:space-y-16">
//             <div className="space-y-4">
//               <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-800">
//                 SKILLS
//               </h2>
//               <div className="space-y-2">
//                 <div className="flex gap-2">
//                   <div className="w-2 h-2 rounded-full bg-neutral-800" />
//                   <div className="w-2 h-2 rounded-full bg-neutral-800" />
//                   <div className="w-2 h-2 rounded-full bg-neutral-800" />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-8">
          

//               <Menu />
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, Code, Layers, Palette } from "lucide-react"

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      name: "Front-End",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "React", level: 80, color: "bg-cyan-500" },
        { name: "Responsive Design", level: 85, color: "bg-purple-500" },
        { name: "Web Accessibility", level: 75, color: "bg-green-600" },
      ],
    },
    {
      name: "UX Design",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "User Research", level: 85, color: "bg-pink-500" },
        { name: "Wireframing", level: 90, color: "bg-violet-600" },
        { name: "Prototyping", level: 80, color: "bg-indigo-500" },
        { name: "Usability Testing", level: 75, color: "bg-rose-500" },
        { name: "Design Systems", level: 85, color: "bg-fuchsia-500" },
      ],
    },
    {
      name: "Data Science",
      icon: <BarChart className="w-5 h-5" />,
      skills: [
        { name: "Data Analysis", level: 85, color: "bg-emerald-600" },
        { name: "Machine Learning", level: 75, color: "bg-sky-600" },
        { name: "Data Visualization", level: 80, color: "bg-teal-500" },
        { name: "Statistical Analysis", level: 70, color: "bg-blue-600" },
        { name: "Big Data", level: 65, color: "bg-cyan-600" },
      ],
    },
    {
      name: "Python",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: "Core Python", level: 90, color: "bg-blue-500" },
        { name: "Pandas", level: 85, color: "bg-yellow-600" },
        { name: "NumPy", level: 80, color: "bg-green-500" },
        { name: "Scikit-Learn", level: 75, color: "bg-red-500" },
        { name: "Django/Flask", level: 70, color: "bg-emerald-500" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              My Expertise
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Professional Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical abilities and expertise across Front-End development, UX Design, Data Science,
              and Python.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue={skillCategories[0].name} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2 px-4 py-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card
                      className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onMouseLeave={() => setSelectedSkill(null)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-lg">{skill.name}</h3>
                          <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 mb-2">
                          <Progress value={skill.level} className="h-2 w-full bg-muted" />
                          <div
                            className={`absolute top-0 left-0 h-full ${skill.color} transition-all duration-1000 ease-in-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                          {selectedSkill?.name === skill.name && (
                            <motion.div
                              className="absolute top-0 left-0 h-full bg-white opacity-30"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${skill.level}%`,
                                transition: { duration: 1, ease: "easeOut" },
                              }}
                            />
                          )}
                        </div>
                        <div className="flex gap-2 mt-4 flex-wrap">
                          {getRelatedTechnologies(skill.name).map((tech, index) => (
                            <Badge key={index} variant="outline" className="bg-background">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="flex flex-col items-center p-6 gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Multidisciplinary Expertise</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  My diverse skill set allows me to bridge the gap between design, development, and data analysis to
                  create comprehensive solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function getRelatedTechnologies(skillName: string): string[] {
  const relatedTech: Record<string, string[]> = {
    // Front-End
    "HTML/CSS": ["Semantic HTML", "Flexbox", "Grid", "SASS"],
    JavaScript: ["ES6+", "TypeScript", "DOM Manipulation"],
    React: ["Hooks", "Context API", "Redux"],
    "Responsive Design": ["Mobile First", "Media Queries", "Viewport"],
    "Web Accessibility": ["ARIA", "WCAG", "Screen Readers"],

    // UX Design
    "User Research": ["Interviews", "Surveys", "Personas"],
    Wireframing: ["Low-fi Prototypes", "Information Architecture", "User Flows"],
    Prototyping: ["Figma", "Adobe XD", "Interactive Mockups"],
    "Usability Testing": ["A/B Testing", "Heatmaps", "User Feedback"],
    "Design Systems": ["Component Libraries", "Style Guides", "Pattern Libraries"],

    // Data Science
    "Data Analysis": ["Exploratory Analysis", "Data Cleaning", "Feature Engineering"],
    "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    "Data Visualization": ["Matplotlib", "Seaborn", "D3.js"],
    "Statistical Analysis": ["Hypothesis Testing", "Regression", "Clustering"],
    "Big Data": ["Hadoop", "Spark", "Data Pipelines"],

    // Python
    "Core Python": ["OOP", "Functional Programming", "Async/Await"],
    Pandas: ["DataFrames", "Data Manipulation", "Time Series"],
    NumPy: ["Arrays", "Vectorization", "Mathematical Functions"],
    "Scikit-Learn": ["Classification", "Regression", "Model Selection"],
    "Django/Flask": ["Web Development", "REST APIs", "MVC Pattern"],
  }

  return relatedTech[skillName] || []
}
