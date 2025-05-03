import Heading from "../ui/Heading";

function getColorStyles(color: string) {
  // Return both border and underline styles based on the color
  switch (color) {
    case "blue":
      return {
        border: "inset-ring-blue-400/20",
        underline: "decoration-blue-400",
      };
    case "green":
      return {
        border: "inset-ring-green-400/20",
        underline: "decoration-green-400",
      };
    case "red":
      return {
        border: "inset-ring-red-400/20",
        underline: "decoration-red-400",
      };
    case "amber":
      return {
        border: "inset-ring-amber-400/20",
        underline: "decoration-amber-400",
      };
    case "purple":
      return {
        border: "inset-ring-purple-400/20",
        underline: "decoration-purple-400",
      };
    case "pink":
      return {
        border: "inset-ring-pink-400/20",
        underline: "decoration-pink-400",
      };
    case "slate":
      return {
        border: "inset-ring-slate-400/20",
        underline: "decoration-slate-400",
      };
    default:
      return {
        border: "inset-ring-gray-400/20",
        underline: "decoration-gray-400",
      };
  }
}

export default function Section({
  color,
  label,
  children,
  className,
  noHeading = false,
}: {
  color: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  noHeading?: boolean;
}) {
  const { border, underline } = getColorStyles(color);

  return (
    <section
      className={`flex w-full flex-col items-center gap-6 rounded-lg inset-ring-1 bg-zinc-900 p-6 text-white ${border} ${className || ""}`}
      aria-label={label}
      id={label.toLowerCase()}
    >
      {!noHeading && (
        <Heading
          className={`text-4xl underline underline-offset-6 ${underline} decoration-3`}
        >
          {label}
        </Heading>
      )}
      {children}
    </section>
  );
}
