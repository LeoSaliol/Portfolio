import { others, skBackend, skFrontend } from "../../../data/SkillsData";
import { ItemsSkills } from "./ItemsSkills";

export const SectionSkills = () => {
  return (
    <article className="mt-6">
      <h3 className="mb-3 text-lg font-semibold lg:mt-9">Front End</h3>
      <ItemsSkills skill={skFrontend} />
      <h3 className="mb-3 mt-9 text-lg font-semibold lg:mt-14">
        Back End / Base de datos
      </h3>
      <ItemsSkills skill={skBackend} />

      <h3 className="mb-3 mt-9 text-lg font-semibold lg:mt-14">Otros</h3>
      <ItemsSkills skill={others} />
    </article>
  );
};
