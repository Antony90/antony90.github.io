interface HeadingUnderlineProps {
  color: string;
}

/** Requires a parent element with `relative` class. */
export function HeadingUnderline({ color }: HeadingUnderlineProps) {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-400';
      case 'green':
        return 'bg-green-400';
      case 'blue':
        return 'bg-blue-400';
      case 'yellow':
        return 'bg-yellow-400';
      case 'purple':
        return 'bg-purple-400';
      default:
        throw new Error(`Unsupported color: ${color}`);
    }
  };

  return (
    <span
      className={`absolute -bottom-[1px] left-0 h-[2px] w-0 ${getColorClass(
        color
      )} transition-all duration-300 group-hover:w-full`}
    />
  );
}
