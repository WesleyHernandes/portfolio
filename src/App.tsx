import Education from "./components/Home/Education";
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}

export default App;
