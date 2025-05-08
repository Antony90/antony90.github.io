
/** Requires a parent element with `relative` class. */
export function HeadingUnderline({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute -bottom-[1px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full ${className}`}
    />
  );
}
