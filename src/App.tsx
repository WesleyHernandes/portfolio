import Project from "./components/Project";
import Section from "./components/Section";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Section position="TRHEE">
        <Project
          type="E-commerce"
          name="Mondabelle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget."
          github="123"
          link="123"
        />
      </Section>
    </main>
  );
}

export default App;
