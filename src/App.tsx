import Section from "./components/Section";
import Tag from "./components/Tag";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Section position="TRHEE">
        <Tag label="HTML5" />
      </Section>
    </main>
  );
}

export default App;
