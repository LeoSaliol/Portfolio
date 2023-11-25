import { ProyectIcon } from "./Icons";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Divisor } from "./utils/divisor";

function App() {
  return (
    <div className="px-8 md:px-0">
      <Navbar />
      <main className="pt-20 md:container md:mx-auto md:max-w-[650px] md:pt-28 lg:max-w-[850px] lg:pt-32 xl:max-w-[1050px]">
        <Intro />
        <Divisor my={20} />
        <section className="mt-24">
          <h2 className=" flex  gap-3 text-3xl">
            Proyectos <ProyectIcon className=" w-8 stroke-textGray pt-[4px] " />
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
