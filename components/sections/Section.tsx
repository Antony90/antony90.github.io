import Heading from "../ui/Heading";


export default function Section({
  headingText,
  label,
  children,
  className,
  headingClassName,
  hideHeading = false,
}: {
  headingText: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
  headingClassName?: string;
  hideHeading?: boolean;
}) {
  return (
    <section
      className={`inset-ring-accent/20 bg-section text-primary flex w-full flex-col items-center gap-6 rounded-lg p-6 inset-ring-1 ${className || ""}`}
      aria-label={headingText}
      id={label}
    >
      {!hideHeading && (
        <Heading
          className={`decoration-accent text-4xl underline decoration-3 underline-offset-6 ${headingClassName || ""}`}
        >
          {headingText}
        </Heading>
      )}
      {children}
    </section>
  );
}
