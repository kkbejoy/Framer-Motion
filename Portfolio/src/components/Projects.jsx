import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={project.title}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  src={project.image}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  alt={project.title}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h6
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  {project.title}
                </motion.h6>
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  {project.description}
                </motion.p>
                {project.technologies.map((tech, index) => {
                  return (
                    <motion.span
                      key={tech}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 0 }}
                      transition={{ duration: 2 }}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
