import { useContext } from "react";
import { mainData } from "../../data/mainData";
import { ContextLenguage } from "../context/LenguageContext";
import { description } from "../utils/descriptions";

export const Intro = () => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <>
      <section className="mt-6 flex flex-col items-center text-center tracking-wide lg:mt-6 lg:gap-2">
        <p className="mb-2 text-2xl lg:mb-0 lg:text-3xl">
          {lenguageES ? "Hola 👋 soy" : "Hello 👋 I am"}{" "}
        </p>
        <h1 className="text-5xl font-black tracking-wider lg:mt-2 lg:text-7xl ">
          {mainData.name}
        </h1>
        <p className="color-change-4x mt-4 text-2xl font-medium tracking-wide lg:text-3xl">
          {lenguageES ? mainData.titleEs : mainData.titleEn}
        </p>

        <p className=" mt-7 px-1 text-justify text-textGray lg:text-lg">
          {lenguageES
            ? description(mainData.descriptionEs.split(" "))
            : description(mainData.descriptionEn.split(" "))}
        </p>
        <a
          href={mainData.resume}
          download
          className=" duration-600 mb-9  mt-8 h-[51px]  rounded-full border-v2green bg-bgGray  px-5 py-3  text-center text-lg font-medium  uppercase tracking-[3px] transition-colors ease-linear hover:scale-105 hover:border-[1px] hover:bg-[#000000f1] hover:font-bold hover:text-v2green "
        >
          {lenguageES ? "Descargar CV" : "Download CV"}
        </a>
      </section>
    </>
  );
};
