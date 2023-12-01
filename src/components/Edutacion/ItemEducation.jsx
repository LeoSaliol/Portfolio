/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";
import { CalenderIcon } from "../../Icons";

export const ItemEducation = ({ edu }) => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <article className="-my-4 space-y-3 divide-y-2 divide-gray-800">
      <div className="shadow-drop-br mb-12 flex flex-wrap rounded-xl bg-bgGray px-9 py-8 md:flex-nowrap ">
        <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-40">
          <span className="title-font font-semibold text-white">
            {edu.level}
          </span>
          <span className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            {" "}
            <CalenderIcon className="w-4" />
            {edu.title === "Universidad Nacional de La Plata"
              ? `${edu.year} - Currently`
              : `${edu.year}`}{" "}
          </span>
        </div>
        <div className=" md:flex-grow">
          <h2 className="title-font  mb-5 text-3xl font-medium text-white sm:mb-2">
            {edu.title}
          </h2>
          <p className="leading-6 text-textGray">
            {lenguageES ? edu.descriptionEs : edu.descriptionEn}
          </p>
          {/* <a className="mt-4 inline-flex items-center text-indigo-400">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
        </div>
      </div>
    </article>
  );
};
