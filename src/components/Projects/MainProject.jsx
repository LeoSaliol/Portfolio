import { useContext } from "react";

import { ProjectIcon } from "../../Icons";
import { ContextLenguage } from "../../context/LenguageContext";
import { SingleProjects } from "./SingleProjects";
import { projects } from "../../../data/proyectData";
import { useState } from "react";

export const MainProject = () => {
  const { lenguageES } = useContext(ContextLenguage);
  const [quantity, setQuantity] = useState(3);
  return (
    <section className="mb-12 mt-24 flex flex-col gap-9">
      <h2 className="   flex gap-3 text-2xl font-semibold tracking-wider md:text-3xl">
        {lenguageES ? "Proyectos" : "Projects"}{" "}
        <ProjectIcon className=" w-8 stroke-textGray pt-[4px] " />
      </h2>
      <div className="space-y-12">
        {projects.slice(0, quantity).map((p, i) => (
          <SingleProjects p={p} key={i} />
        ))}
      </div>
      {quantity <= projects.length && (
        <button
          className="border-violet-40 mb-9 h-12 w-32 self-center rounded-lg border-2 text-center"
          onClick={() => setQuantity(quantity + projects.length)}
        >
          {lenguageES ? "Mostrar mas" : "Show more"}
        </button>
      )}
    </section>
  );
};
