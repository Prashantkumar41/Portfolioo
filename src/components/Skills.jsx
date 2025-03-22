// import React from "react"
// import {
//   DiHtml5,
//   DiCss3,
  
//   DiBootstrap,
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiMongodb,
//   DiGithubBadge,
// } from "react-icons/di"
// import Reveal from "./Reveal";


// const skills = [
//     {
//       category: 'Frontend',
//       technologies: [
//         { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
//         { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
//         // { name: 'Tailwind', icon: <DiTailwind className='text-pink-600' /> },
//         // { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
//         { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
//         { name: 'React', icon: <DiReact className='text-blue-500' /> },
//       ],
//     },
//     {
//       category: 'Fullstack',
//       technologies: [
//         { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
//         { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
//         { name: 'React', icon: <DiReact className='text-blue-500' /> },
//         { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
//         // { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
//       ],
//     },
//   ]

// const Skills = () => {
//   return (
//     <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
//         <Reveal>
//         <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
//         <p className="text-center mb-8">
//             I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
//         </p>

//         <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
//                         ">
                         
//             {skills.map((skill, index) => (
              
//                 <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
//                                 w-full md:w-1/2  min-h-[200px]">
//                                                 {/* this one is only add above line :  min-h-[300px] */}
                                  
//                     <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    
//                     <div className="grid grid-cols-2 gap-4">
//                         {skill.technologies.map((tech, idx) => (
//                             <div key={idx} className="flex items-center space-x-2">
//                                 <span className="text-2xl">{tech.icon}</span>
//                                 <span>{tech.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
          
//         </div>
//         </Reveal>
//     </div>
//   )
// }

// export default Skills





// ******************** 3rd one ******************************

import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import Reveal from "./Reveal";
import ShinyEffect from "./ShinyEffect";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" />, textColor: "text-orange-400" },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" />, textColor: "text-blue-400" },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" />, textColor: "text-yellow-300" },
      { name: "ReactJS", icon: <DiReact className="text-blue-500" />, textColor: "text-blue-300" },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js ", icon: <DiNodejsSmall className="text-green-500" />, textColor: "text-green-300" },
      { name: "MongoDB ", icon: <DiMongodb className="text-green-600" />, textColor: "text-green-400" },
      { name: "ReactJS", icon: <DiReact className="text-blue-500" />, textColor: "text-blue-300" },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" />, textColor: "text-gray-400" },
      // { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" />, textColor: "text-gray-400" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="relative max-w-[700px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      {/* Shiny Background Effects */}
      <ShinyEffect left={-200} top={100} size={400} color="rgba(0, 150, 255, 0.3)" />
      <ShinyEffect right={-200} top={300} size={500} color="rgba(150, 50, 255, 0.3)" />

      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2 min-h-[250px] flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2 min-h-[50px]">
                    <span className="text-3xl flex-shrink-0">{tech.icon}</span>
                    <span className={`text-lg font-semibold ${tech.textColor} break-words leading-tight`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
