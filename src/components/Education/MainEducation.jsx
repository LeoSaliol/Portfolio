import { useContext } from "react";
import { educations } from "../../../data/educationData";
import { EducationIcon } from "../../Icons";
import { ItemEducation } from "./ItemEducation";
import { ContextLenguage } from "../../context/LenguageContext";

export const MainEducation = () => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <section>
      <h2
        className="mb-12 mt-28 flex gap-3 text-3xl font-bold tracking-wider  lg:text-4xl"
        id="Education"
      >
        {lenguageES ? "Educación" : "Education"}

        <EducationIcon className="w-8 stroke-textGray pt-1" />
      </h2>
      <article className=" my-20 ">
        <div className="container mx-auto sm:px-5">
          {educations.map((edu, i) => (
            <ItemEducation key={i} edu={edu} />
          ))}
        </div>
      </article>
    </section>
  );
};
