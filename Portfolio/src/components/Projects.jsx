import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={project.title}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  alt={project.title}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6>{project.title}</h6>
                <p>{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
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
