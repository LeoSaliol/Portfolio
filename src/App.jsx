import { skBackend, skFrontend } from "../data/SkillsData";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { MainProject } from "./components/Projects/MainProject";
import { SkillIcon } from "./Icons/index";
import { Divisor } from "./utils/divisor";

function App() {
  return (
    <div className="px-12 md:px-0">
      <Navbar />

      <main className="pt-20 md:container md:mx-auto md:max-w-[720px] md:pt-28 lg:max-w-[850px] lg:pt-32 xl:max-w-[1050px]">
        <Intro />
        <Divisor my={20} />
        <MainProject className="w-8 stroke-textGray pt-[4px]" />
        <section>
          <h2 className="flex gap-3 text-3xl font-bold tracking-wider md:text-3xl">
            Skills <SkillIcon className=" w-7 fill-textGray pt-1  " />
          </h2>
          <article className="mt-6">
            <h3 className="mb-3 text-lg font-semibold">Front End</h3>
            <div className=" flex flex-wrap items-center gap-x-9 gap-y-4">
              {skFrontend.map((sk, i) => (
                <div
                  key={i}
                  className="shadow-drop-br flex h-14 w-40 items-center justify-center gap-2 rounded-xl bg-bgGray"
                >
                  <img
                    src={sk.img}
                    alt={sk.name + "logo"}
                    className={` h-5 w-5 ${sk.name === "NextJS" && ""}`}
                  />
                  <p className="">{sk.name}</p>
                </div>
              ))}
            </div>
            <h3 className="mb-3 mt-5 text-lg font-semibold">Backend</h3>
            <div className=" flex flex-wrap items-center gap-x-9 gap-y-4">
              {skBackend.map((sk, i) => (
                <div
                  key={i}
                  className="shadow-drop-br flex h-14 w-40 items-center justify-center gap-2 rounded-xl bg-bgGray"
                >
                  <img
                    src={sk.img}
                    alt={sk.name + "logo"}
                    className={` h-5 w-4`}
                  />
                  <p className="">{sk.name}</p>
                </div>
              ))}
            </div>

            <h3>Base de Datos</h3>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
