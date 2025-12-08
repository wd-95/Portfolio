"use client";
import { useState } from "react";
import Image from "next/image";


const skills = [
  // frontend
  { name: "HTML5",        category: "frontend", icon: "/icon/html.png" },
  { name: "CSS3",         category: "frontend", icon: "/icon/css.png" },
  { name: "JavaScript",   category: "frontend", icon: "/icon/js.png" },
  { name: "React",        category: "frontend", icon: "/icon/react.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "/icon/tailwind.png" },
  { name: "Next.js",      category: "frontend", icon: "/icon/next-js.webp" },

  // backend (app / API)
  { name: "Node.js",      category: "backend",  icon: "/icon/nodejs.svg" },
  { name: "Express",      category: "backend",  icon: "/icon/express.png" },
  { name: "Java",         category: "backend",  icon: "/icon/java.png" },
  { name: "Python",       category: "backend",  icon: "/icon/python.png" },

  // data & BI
  { name: "MySQL",        category: "data-bi",  icon: "/icon/mysql.png" },
  { name: "PostgreSQL",   category: "data-bi",  icon: "/icon/postgre.png" },
  { name: "MariaDB",      category: "data-bi",  icon: "/icon/mariadb.png" },
  { name: "PowerBI",      category: "data-bi",  icon: "/icon/powerbi.svg" },
  { name: "Excel",        category: "data-bi",  icon: "/icon/excel.svg" },

  // devops & tools
  { name: "Git/GitHub",         category: "devops & tools", icon: "/icon/github.png" },
  { name: "Linux",              category: "devops & tools", icon: "/icon/linux.svg" },
  { name: "Docker",             category: "devops & tools", icon: "/icon/docker.svg" },
  { name: "VS Code",            category: "devops & tools", icon: "/icon/vscode.svg" },
  { name: "Jenkins",            category: "devops & tools", icon: "/icon/jenkins.png" },
  { name: "Cisco Packet Tracer", category: "devops & tools", icon: "/icon/cisco-packet-tracer.png" },
];

const categories = ["all", "frontend", "backend", "data-bi", "devops & tools"];


const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          Mes <span className="text-light dark:text-dark"> Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory === category
                ? "bg-light text-white dark:bg-dark card-hover"
                : " text-black dark:text-white card-hover"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-5 lg:gap-0">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className=" p-6 flex flex-col items-center gap-3"
            >
              {/* cercle + icon */}
              <div className="w-20 h-20 rounded-full border-2 border-light dark:border-dark flex items-center justify-center overflow-hidden card-hover ">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain rounded-full"
                />
              </div>

              {/* nom techno */}
              <h3 className="font-semibold text-lg dark:text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;




// Avec bar et % 

// "use client";
// import { useState } from "react";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "PowerBi", level: 70, category: "tools" },
//   { name: "Excel", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-light dark:text-dark"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
//                 activeCategory === category
//                   ? "bg-light text-white dark:bg-dark card-hover"
//                   : " text-black dark:text-white card-hover"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg dark:text-white">{skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>
//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SkillsSection;