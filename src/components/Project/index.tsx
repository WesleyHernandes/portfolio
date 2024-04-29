import Icon from "../Icon";

export interface ProjectProps {
  type: string;
  name: string;
  description: string;
  github?: string;
  link?: string;
}

export default function Project({
  type,
  name,
  description,
  github,
  link,
}: ProjectProps) {
  return (
    <section className="flex flex-col sm:flex-row items-stretch justify-start w-full p-5 gap-6 bg-[var(--dark)] rounded-lg border border-[var(--text)]">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[var(--text)] text-base tracking-wide text-nowrap">
          {type}
        </p>
        <p className="text-[var(--text)] text-xl font-bold tracking-wide text-nowrap">
          {name}
        </p>
      </div>

      <div className="hidden sm:flex">
        <div className="dash" />
      </div>

      <p className="flex flex-grow items-center text-[var(--text)] text-sm tracking-wide">
        {description}
      </p>

      <div className="flex flex-row sm:flex-col gap-2">
        {github && (
          <a
            href={github}
            className="flex items-center justify-center w-7 h-7 rounded-lg text-[var(--dark)] bg-[var(--text)]"
            target="_blank"
          >
            <Icon name="github" size={19} />
          </a>
        )}

        {link && (
          <a
            href={link}
            className="flex items-center justify-center w-7 h-7 rounded-lg text-[var(--dark)] bg-[var(--text)]"
            target="_blank"
          >
            <Icon name="square-arrow-out-up-right" size={19} />
          </a>
        )}
      </div>
    </section>
  );
}
