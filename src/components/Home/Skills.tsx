import { Skills as List } from "../../mock/Skills";
import Section from "../Section";
import Tag from "../Tag";

export default function Skills() {
  return (
    <Section position="TWO">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 w-full max-w-[var(--container)] mx-auto">
        <div className="flex flex-grow flex-col justify-center w-full max-w-[640px]">
          <h2 className="title">HARD SKILLS</h2>
          <p className="subtitle mb-12">Conhecimentos e Habilidades</p>

          <p className="text mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            porttitor urna. Aenean non turpis quis felis pulvinar gravida.
            Aenean faucibus consectetur velit at posuere.
          </p>

          <p className="text">
            Nullam mattis laoreet justo, quis tincidunt sapien blandit nec. Sed
            auctor est sit amet lorem aliquam tincidunt. Nulla tempor odio non
            tristique egestas.
          </p>
        </div>

        <div className="dash" />

        <div className="flex flex-wrap gap-5 items-start justify-start w-full max-w-[640px]">
          {List.map((skill) => (
            <Tag label={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
