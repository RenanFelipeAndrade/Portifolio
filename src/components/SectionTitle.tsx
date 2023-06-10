interface SectionTitleProps {
  title: string;
  titleNumber: string;
  className?: string;
}
export const SectionTitle = ({
  title,
  titleNumber,
  className,
}: SectionTitleProps) => {
  return (
    <h2
      className={`font-titleFont text-2xl font-semibold flex items-center ${
        className && className
      }`}
    >
      <span className="text-base md:text-lg text-textGreen mr-2">
        {titleNumber}.
      </span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};
