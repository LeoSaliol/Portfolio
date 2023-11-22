import { mainData } from '../data/mainData';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className="px-7">
            <Navbar />
            <main className="pt-20">
                <section className="mt-6 text-center">
                    <h1 className="text-5xl font-black tracking-wider ">
                        {mainData.name}
                    </h1>
                    <p className="mt-5 text-2xl tracking-normal font-medium color-change-4x">
                        {mainData.title}
                    </p>
                    <a
                        href={mainData.resume}
                        download
                        className=" inline-block mt-5 px-5 py-3 bg-[#ffffff11] text-white rounded-full text-lg font-medium hover:bg-zinc-600 uppercase transition duration-300 ease-in-out scale-100 hover:scale-105"
                    >
                        Download CV
                    </a>
                </section>
            </main>
        </div>
    );
}

export default App;
