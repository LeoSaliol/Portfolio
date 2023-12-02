import "./button.css";
import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";

export const FormContact = () => {
  const { lenguageES } = useContext(ContextLenguage);

  return (
    <>
      <section className="body-font relative rounded-xl   text-gray-400">
        <div className="container mx-auto py-2 ">
          <div className="mx-auto md:w-full lg:w-1/2">
            <div className=" flex flex-wrap md:justify-center">
              <form className=" w-full sm:w-3/4">
                <div className="mb-2 p-2  ">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-textGray"
                    >
                      {lenguageES ? "Nombre" : "Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-8 text-textPrimary outline-none transition-colors duration-500 ease-in-out focus:border-[#925ff0] focus:bg-bgBlack focus:ring-1 focus:ring-[#925ff0]"
                    />
                  </div>
                </div>
                <div className="mb-2 p-2 ">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-textGray"
                    >
                      {lenguageES ? "Correo" : "Email"}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="w-full rounded border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-8 text-textPrimary outline-none transition-colors duration-500 ease-in-out focus:border-[#925ff0] focus:bg-bgBlack focus:ring-1 focus:ring-[#925ff0]"
                    />
                  </div>
                </div>
                <div className="p-2 sm:w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-gray-400"
                    >
                      {lenguageES ? "Mensaje" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="h-32 w-full resize-none rounded border border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-6 text-textPrimary outline-none transition-colors duration-200 ease-in-out focus:border-[#925ff0] focus:bg-bgBlack focus:ring-1 focus:ring-[#925ff0]"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 text-center sm:w-full">
                  <button className="css-button-retro--rose  text-textPrimary">
                    {lenguageES ? "Enviar" : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
