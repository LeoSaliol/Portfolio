import { ContactIcon } from "../../Icons";

export const MainContact = () => {
  return (
    <section id="Contacto">
      <div className="flex flex-col gap-4">
        <h2
          className="mb-12 mt-28 flex gap-3 text-3xl font-bold tracking-wider  lg:text-4xl"
          id="Education"
        >
          Contacto
          <ContactIcon className="w-8 stroke-textGray pt-2" />
        </h2>
      </div>
    </section>
  );
};
