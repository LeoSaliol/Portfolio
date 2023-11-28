import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { MainProject } from "./components/Projects/MainProject";
import { MainSkills } from "./components/Skills/MainSkills";

import { Divisor } from "./utils/divisor";

function App() {
  return (
    <div className="px-12 md:px-0">
      <Navbar />

      <main className="z-0 pt-20 md:container md:mx-auto md:max-w-[720px] md:pt-28 lg:max-w-[850px] lg:pt-32 xl:max-w-[1050px]">
        <Intro />
        <Divisor my={20} />
        <MainProject className="w-8 stroke-textGray pt-[4px]" />
        <MainSkills />
      </main>
    </div>
  );
}

export default App;
