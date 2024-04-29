export interface SectionProps {
  position: "ONE" | "TWO" | "TRHEE";
  children: React.ReactNode;
}

export default function Section({ children, position }: SectionProps) {
  const getPosition = () => {
    switch (position) {
      case "ONE":
        return {
          before: "bottom-0 -translate-x-1/3 translate-y-1/3",
          after: "top-0 translate-x-1/2 -translate-y-1/2",
        };
      case "TWO":
        return {
          before: "bottom-0 -translate-x-1/3 translate-y-1/3",
          after: "top-1/2 translate-x-1/2 -translate-y-1/2",
        };
      case "TRHEE":
        return {
          before: "top-0 -translate-x-1/3 -translate-y-1/3",
          after: "bottom-0 translate-x-1/2 translate-y-1/2",
        };
    }
  };

  return (
    <section className="overflow-hidden relative flex flex-col justify-center w-full min-h-screen py-12 lg:py-[100px] px-4 bg-[var(--dark)]">
      <div className="relative z-20 flex flex-col w-full">{children}</div>

      <div
        className={`absolute z-10 flex w-[44%] left-0 aspect-square opacity-50 bg-[var(--medium)] rounded-full ${
          getPosition().before
        }`}
      />
      <div
        className={`absolute z-10 flex w-[34%] right-0 aspect-square opacity-50 bg-[var(--medium)] rounded-full ${
          getPosition().after
        }`}
      />
    </section>
  );
}
