import { useContext } from "react";
import "./button.css";
import { ProjectIcon } from "../../Icons";
import { ContextLenguage } from "../../context/LenguageContext";
import { SingleProjects } from "./SingleProjects";
import { projects } from "../../../data/proyectData";
import { useState } from "react";

export const MainProject = () => {
  const { lenguageES } = useContext(ContextLenguage);
  const [quantity, setQuantity] = useState(3);
  return (
    <section className="mb-12 mt-24 flex flex-col gap-9" id="Proyecto">
      <h2 className="   flex gap-3 text-2xl font-semibold tracking-wider md:text-3xl lg:text-4xl">
        {lenguageES ? "Proyectos" : "Projects"}{" "}
        <ProjectIcon className=" w-8 stroke-textGray pt-[4px] lg:w-10" />
      </h2>
      <div className="space-y-12">
        {projects.slice(0, quantity).map((p, i) => (
          <SingleProjects p={p} key={i} />
        ))}
      </div>
      {quantity <= projects.length && (
        <button
          className="css-button-sliding-to-bottom--rose mb-9 mt-3 h-12 w-36 self-center rounded-lg text-center tracking-wider"
          onClick={() => setQuantity(quantity + projects.length)}
        >
          {lenguageES ? "Mostrar mas" : "Show more"}
        </button>
      )}
    </section>
  );
};
