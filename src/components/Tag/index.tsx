interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <p className="flex w-max py-2 px-4 text-base font-semibold tracking-wide bg-[var(--text)] rounded-lg">
      {label}
    </p>
  );
}
