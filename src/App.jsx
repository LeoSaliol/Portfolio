import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className="px-7">
            <Navbar />
            <main className="pt-20">
                <Intro />
            </main>
        </div>
    );
}

export default App;
