import { educations } from "../../../data/educationData";
import { EducationIcon } from "../../Icons";
import { ItemEducation } from "./ItemEducation";

export const MainEducation = () => {
  return (
    <>
      <h2
        className="mb-12 mt-28 flex gap-3 text-3xl font-bold tracking-wider  lg:text-4xl"
        id="Education"
      >
        Educacion
        <EducationIcon className="w-8 stroke-textGray pt-1" />
      </h2>
      <section className=" my-20 ">
        <div className="container mx-auto sm:px-5">
          {educations.map((edu, i) => (
            <ItemEducation key={i} edu={edu} />
          ))}
        </div>
      </section>
    </>
  );
};
