export default function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <article
      className={`dark:inset-ring-accent/20 bg-card rounded-lg p-6 inset-ring-1 inset-ring-accent/30 transition-all duration-300 ${
        hover ? "hover:shadow-lg dark:hover:inset-ring-1" : ""
      } ${className || ""}`}
    >
      {children}
    </article>
  );
}
