import { useState } from "react";
import { Projects as List } from "../../mock/Projects";
import Project from "../Project";
import Selector from "../Selector";

export default function Projects() {
  const [active, setActive] = useState(1);

  return (
    <section className="flex flex-col justify-center w-full min-h-screen p-12 lg:py-[100px] px-4 bg-[var(--medium)]">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-5 max-w-[var(--container)] mx-auto">
        <div className="flex flex-col w-full max-w-[840px] lg:max-w-[485px]">
          <p className="subtitle">Seleção dos melhores projetos</p>
          <h2 className="title mb-11">PORTFÓLIO</h2>

          <div className="flex flex-col w-full">
            {List.map((item) => (
              <Selector key={item.id} active={item.id === active} {...item} />
            ))}
          </div>
        </div>

        <div className="dash" />

        <div className="flex flex-col w-full max-w-[840px] gap-4">
          {List.find((category) => category.id === active)?.items?.map(
            (item) => <Project key={item.id} {...item} />
          )}
        </div>
      </div>
    </section>
  );
}
