import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { MainProject } from "./components/Projects/MainProject";

import { Divisor } from "./utils/divisor";

function App() {
  return (
    <div className="px-12 md:px-0">
      <Navbar />

      <main className="pt-20 md:container md:mx-auto md:max-w-[720px] md:pt-28 lg:max-w-[850px] lg:pt-32 xl:max-w-[1050px]">
        <Intro />
        <Divisor my={20} />
        <MainProject />
      </main>
    </div>
  );
}

export default App;
