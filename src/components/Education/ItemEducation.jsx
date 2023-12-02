/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";
import { CalenderIcon } from "../../Icons";

export const ItemEducation = ({ edu }) => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <article className="divide-y-2 divide-gray-800 sm:-my-4 sm:space-y-3">
      <div className="shadow-drop-br mb-12 flex flex-wrap rounded-xl bg-bgGray px-7 py-6 sm:px-9 sm:py-8 md:flex-nowrap ">
        <div className="mb-2 flex flex-shrink-0 flex-col sm:mb-6 md:mb-0 md:w-40">
          <span className="title-font font-semibold text-white">
            {edu.level}
          </span>
          <span className="mb-2 flex items-center gap-1 text-sm text-gray-500 sm:mt-1">
            {" "}
            <CalenderIcon className="w-4" />
            {edu.title === "Universidad Nacional de La Plata"
              ? `${edu.year} - Currently`
              : `${edu.year}`}{" "}
          </span>
        </div>
        <div className=" md:flex-grow">
          <h2 className="title-font  mb-2 text-3xl font-medium text-white">
            {edu.title}
          </h2>
          <p className="leading-6 text-textGray">
            {lenguageES ? edu.descriptionEs : edu.descriptionEn}
          </p>
        </div>
      </div>
    </article>
  );
};
