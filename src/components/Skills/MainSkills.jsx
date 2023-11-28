import { SkillIcon } from "../../Icons";
import { SectionSkills } from "./SectionSkills";

export const MainSkills = () => {
  return (
    <section className="pb-5">
      <h2 className="flex gap-3 text-3xl font-bold tracking-wider md:text-3xl">
        Skills <SkillIcon className=" w-7 fill-textGray pt-1  " />
      </h2>
      <SectionSkills />
    </section>
  );
};
