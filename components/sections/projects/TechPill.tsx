import { TechName, getTechIcon, getTechColorStyle, getTechDisplayName } from "@/constants/tech";

export function TechPill({ name }: { name: TechName }) {
  const Icon = getTechIcon(name);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 text-[0.8rem] font-medium whitespace-nowrap group-hover:opacity-100 ${getTechColorStyle(name)}`}
    >
      <Icon className="size-4 flex-shrink-0" />
      {getTechDisplayName(name)}
    </span>
  );
}
