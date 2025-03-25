import React from 'react';
import FutureAI from "../assets/FutureAI.jpg";
import portfolio from "../assets/portfolio.jpg"
import JobPortal from "../assets/jobportal.jpg"
import RandomMemsGenerator from "../assets/RandomMemsGenerator.jpg"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: FutureAI,
      title: "Project #1",
      description: "Real time Trend analysis and Helps users build resumes, prepare for interviews and track industry trends with personalized insights.",
      links: {
        site: "https://future-ai-prhd.vercel.app/",
        github: "https://github.com/Prashantkumar41/AI-Powered-by-FutureAI",
      },
    },
    {
      img: portfolio,
      title: "Project #2",
      description: "This is portfolio project.in this project i had used React,Framer-Motion and Tailwind",
      links: {
        site: "https://prashant-portfolioo-cs.vercel.app/",
        github: "https://github.com/Prashantkumar41/Portfolioo",
      },
    },
    {
      img: JobPortal,
      title: "Project #3",
      description: "This is job-portal project.in this project i had used React, Clerk , Supabase and Tailwind",
      links: {
        site: "https://job-portal-wheat-phi.vercel.app/",
        github: "https://github.com/Prashantkumar41/Jobs-portal",
      },
    },
    {
      img: RandomMemsGenerator,
      title: "Project #4",
      description: "A React app that generates memes based on random name searches, showcasing dynamic content rendering and API integration.",
      links: {
        site: "https://reactmemebuilder.vercel.app/",
        github: "https://github.com/Prashantkumar41/Random-Mems",
      },
    },
   
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
