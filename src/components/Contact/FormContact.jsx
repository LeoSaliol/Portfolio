import "./button.css";
import { useContext } from "react";
import { ContextLenguage } from "../../context/LenguageContext";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const FormContact = () => {
  const { lenguageES } = useContext(ContextLenguage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const promises = () => new Promise((resolve) => setTimeout(resolve, 2000));
  const form = useRef();
  const onSubmit = (data, e) => {
    toast.promise(promises, {
      loading: `${lenguageES ? "Enviando" : "Sending"}`,
      success: `${lenguageES ? "Enviado" : "Send"}`,
    });
    emailjs
      .sendForm(
        "service_2a0cfud",
        "template_3g59mxr",
        form.current,
        "P-94-nzaL1oCllZyV",
      )
      .then((resultado) => {
        if (resultado.text === "OK") {
          setTimeout(() => {
            e.target.reset();
          }, 1900);
        }
      });
  };

  return (
    <section className="body-font relative rounded-xl   text-gray-400">
      <div className="container mx-auto py-2 ">
        <div className="mx-auto md:w-full  lg:w-3/4">
          <div className=" flex flex-wrap md:justify-center ">
            <form
              ref={form}
              className=" w-full sm:w-3/4"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    className={`w-full rounded border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-8 text-textPrimary outline-none transition-colors duration-500 ease-in-out  focus:bg-bgBlack focus:ring-1  ${
                      errors.name && errors.name.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "focus:border-v2violet focus:ring-v2violet"
                    }`}
                    {...register("name", {
                      required: `${
                        (true,
                        lenguageES ? "Nombre requerido" : "Name required")
                      }`,
                      minLength: {
                        value: 3,
                        message: `${
                          lenguageES ? "Nombre muy corto" : "Name too short"
                        }`,
                      },
                    })}
                  />
                  {errors.name && errors.name.message && (
                    <span className="text-xs text-red-500">
                      {errors.name && errors.name.message}
                    </span>
                  )}
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
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full  rounded border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-8 text-textPrimary outline-none transition-colors duration-500 ease-in-out  focus:bg-bgBlack focus:ring-1 ${
                      errors.email && errors.email.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "focus:border-v2violet focus:ring-v2violet"
                    }`}
                    {...register("email", {
                      minLength: {
                        value: 5,
                        message: `${
                          lenguageES ? "Correo muy corto" : "Email too short"
                        }`,
                      },
                      required: `${
                        lenguageES ? "Correo requerido" : "Email required"
                      }`,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: `${
                          lenguageES ? "Correo invalido" : "Invalid email"
                        }`,
                      },
                    })}
                  />
                  {errors.email && errors.email.message && (
                    <span className="text-xs text-red-500">
                      {errors.email && errors.email.message}
                    </span>
                  )}
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
                    className={`h-32 w-full resize-none rounded border border-[#925ff073] bg-bgGray bg-opacity-40 px-3 py-1 text-base leading-6 text-textPrimary outline-none transition-colors duration-200 ease-in-out  focus:bg-bgBlack focus:ring-1  ${
                      errors.message && errors.message.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "focus:border-v2violet focus:ring-v2violet"
                    }`}
                    {...register("message", {
                      minLength: {
                        value: 10,
                        message: `${
                          lenguageES ? "Mensaje muy corto" : "Message too short"
                        }`,
                      },
                      required: `${
                        lenguageES ? "Mensaje requerido" : "Message required"
                      }`,
                    })}
                  ></textarea>
                  {errors.message && errors.message.message && (
                    <span className="text-xs text-red-500">
                      {errors.message && errors.message.message}
                    </span>
                  )}
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
  );
};
