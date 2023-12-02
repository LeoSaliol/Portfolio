import { useContext } from "react";
import { ContactIcon } from "../../Icons";
import { FormContact } from "./FormContact";
import { ContextLenguage } from "../../context/LenguageContext";
import { FooterContact } from "./FooterContact";

export const MainContact = () => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <section id="Contacto">
      <div className="flex flex-col gap-[5px] md:gap-4">
        <h2
          className=" mt-28 flex gap-3 text-3xl font-bold tracking-wider   lg:text-4xl"
          id="Education"
        >
          {lenguageES ? "Contacto" : "Contact Me"}{" "}
          {/* <ContactIcon className="w-8 stroke-textGray pt-2" /> */}
          <ContactIcon className="w-8 stroke-textGray pt-1 sm:pt-2" />
        </h2>
        <p className="mb-4 text-left text-base leading-relaxed text-textSecondary md:mb-0 md:w-full lg:w-2/3">
          {lenguageES
            ? "Si tienes alguna duda o quieres contactarme, no dudes en escribirme."
            : "If you have any questions or want to contact me, do not hesitate to write to me."}
        </p>
        <FormContact />
        <FooterContact />
      </div>
    </section>
  );
};
