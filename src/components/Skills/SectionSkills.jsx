import { useContext } from "react";
import { others, skBackend, skFrontend } from "../../../data/SkillsData";
import { ItemsSkills } from "./ItemsSkills";
import { ContextLenguage } from "../../context/LenguageContext";

export const SectionSkills = () => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <article className="mt-6">
      <h3 className="mb-3 text-lg font-semibold lg:mt-9">Front End</h3>
      <ItemsSkills skill={skFrontend} />
      <h3 className="mb-3 mt-9 text-lg font-semibold lg:mt-14">
        {lenguageES ? "Back End / Base de datos" : " Back End / Data Base"}
      </h3>
      <ItemsSkills skill={skBackend} />

      <h3 className="mb-3 mt-9 text-lg font-semibold lg:mt-14">
        {lenguageES ? "Otros" : "Others"}
      </h3>
      <ItemsSkills skill={others} />
    </article>
  );
};
