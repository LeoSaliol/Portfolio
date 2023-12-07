/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";

export const SingleProjects = ({ p }) => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <div className=" mt-6 w-full overflow-hidden  rounded-[1rem]  md:grid md:grid-cols-2 md:gap-9 lg:w-3/4 xl:w-3/4 xl:gap-5">
      <figure
        className=" mb-5 h-[18rem] overflow-hidden rounded-[1rem] bg-bgGray object-contain sm:h-[19rem] 
      sm:w-3/4 md:h-full  md:w-full xl:h-[17rem] xl:w-[23rem] "
      >
        <img
          src={p.img}
          alt={p.title}
          className=" h-full w-full translate-x-[1.5rem] translate-y-[1.5rem] rounded-s-[1rem] transition-all duration-500 ease-out hover:translate-x-[1rem] hover:translate-y-[1rem] md:object-cover md:hover:translate-x-[0.8rem] md:hover:translate-y-[0.8rem] "
        />
      </figure>
      <article className="  md:flex md:flex-col md:gap-1 md:py-8">
        <h3 className="mb-4 text-3xl font-bold md:mb-2 ">{p.title}</h3>
        <p className="font-semibold tracking-wide text-textGray ">
          {lenguageES ? p.descriptionEs : p.descriptionEn}
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
                className="tooltip absolute top-[-2.5rem] z-50 flex rounded-lg border-t-[50%] bg-gray-600  px-2 py-2 
    text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 sm:right-[-1.5rem]"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className=" space-x-5 pb-5  ">
          <a href={p.urlProyect} target="_blank" rel="noreferrer">
            <button className="css-button-sliding-to-left--green h-9 w-28 font-semibold tracking-wider md:h-11 md:w-32 md:text-lg">
              {lenguageES ? "Ver" : "Live"}
            </button>
          </a>
          <a href={p.urlRepo} target="_blank" rel="noreferrer">
            <button
              className="css-button-sliding-to-left--blue h-9 w-28 text-base
font-semibold tracking-wider md:h-11 md:w-32 md:text-lg"
            >
              {lenguageES ? "Repositorio" : "Repository"}
            </button>
          </a>
        </div>
      </article>
    </div>
  );
};
