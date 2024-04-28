import Section from "./components/Section";
import Selector from "./components/Selector";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Section position="TRHEE">
        <Selector
          active
          icon="calendar"
          title="Lorem ipsum"
          subtitle="dolor sit amet"
        />
      </Section>
    </main>
  );
}

export default App;
