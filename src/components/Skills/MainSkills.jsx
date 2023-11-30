import { useContext } from "react";
import { SkillIcon } from "../../Icons";
import { SectionSkills } from "./SectionSkills";
import { ContextLenguage } from "../../context/LenguageContext";

export const MainSkills = () => {
  const { lenguageES } = useContext(ContextLenguage);
  return (
    <section className="mb-10 mt-24 pb-5" id="Skills">
      <h2 className="flex gap-3 text-3xl font-bold tracking-wider  lg:text-4xl">
        {lenguageES ? "Tecnologías" : "Skills"}{" "}
        <SkillIcon className=" w-7 stroke-textGray pt-[5px] lg:w-9  " />
      </h2>
      <SectionSkills />
    </section>
  );
};
