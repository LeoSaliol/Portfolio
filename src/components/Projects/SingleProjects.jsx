/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";

export const SingleProjects = ({ p }) => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <div className=" mt-6 w-full  pb-12 md:grid md:grid-cols-2 md:gap-9 ">
      <figure className=" mb-5 h-[17rem] overflow-hidden rounded-[1rem] bg-bgGray object-contain sm:h-[22rem] md:h-full ">
        <img
          src={p.img}
          alt={p.title}
          className=" h-full w-full translate-x-[1.5rem] translate-y-[1.5rem] rounded-[1rem] transition-all duration-500 ease-out hover:translate-x-[1rem] hover:translate-y-[1rem] md:object-cover md:hover:translate-x-[0.8rem] md:hover:translate-y-[0.8rem] "
        />
      </figure>
      <article className="  md:flex md:flex-col md:gap-1 md:py-8">
        <h3 className="mb-4 text-3xl font-bold md:mb-2 md:text-4xl">
          {p.title}
        </h3>
        <p className="font-semibold tracking-wide text-textGray ">
          {p.descriptionEs}
        </p>
        <div className="my-6 flex gap-4 md:mb-4 md:mt-2 ">
          {p.skills.map((skill, i) => (
            <div key={i} className="group relative">
              <img
                src={skill.img}
                alt={`${skill.name} icon`}
                className="  h-7 w-6"
              />
              <span
                className="tooltip absolute right-[-1rem] top-[-2.5rem]  rounded-lg border-t-[50%]  bg-gray-600 px-2 
    py-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className=" space-x-5 ">
          <a href={p.urlProyect} target="_blank" rel="noreferrer">
            <button className="h-11  w-32 rounded-lg bg-textPrimary text-center text-xl font-extrabold  text-bgBlack">
              {lenguageES ? "Ver proyecto" : "Live"}
            </button>
          </a>
          <a href={p.urlRepo} target="_blank" rel="noreferrer">
            <button className="h-11 w-36 rounded-lg bg-bgGray text-xl font-bold text-textPrimary">
              {lenguageES ? "Repositorio" : "Repository"}
            </button>
          </a>
        </div>
      </article>

      {/* <div className="group relative flex">
        <span className="bg-red-400 px-2 py-1 text-white">Button</span>

        <span
          className="absolute left-1/2 m-4 mx-auto -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-1 
    text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
        >
          Tooltip
        </span>
      </div> */}
    </div>
  );
};
