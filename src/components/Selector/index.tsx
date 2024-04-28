import Icon from "../Icon";

export interface SelectorProps {
  active?: boolean;
  icon: any;
  title: string;
  subtitle: string;
}

export default function Selector({
  active,
  icon,
  title,
  subtitle,
}: SelectorProps) {
  return (
    <button
      className={`flex items-stretch justify-start w-full py-4 px-5 border outline-none transition-all duration-300 rounded-lg ${active ? "opacity-100 border-[var(--text)] bg-[var(--dark)]" : "opacity-50 border-transparent bg-transparent"}`}
    >
      <div className="flex items-center justify-center text-[var(--dark)] w-12 h-12 bg-[var(--text)] rounded-lg">
        <Icon name={icon} />
      </div>
      <div className="flex flex-col items-start w-[calc(100%-50px)] pl-4">
        <p className="text-[var(--text)] text-base tracking-wide">{title}</p>
        <p className="text-[var(--text)] text-xl font-bold tracking-wide">
          {subtitle}
        </p>
      </div>
    </button>
  );
}
