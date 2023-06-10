import Link from "next/link";

export const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <Link href="mailto:fel9.renan02@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          fel9.renan02@gmail.com
        </p>
      </Link>
      <div className="w-[2px] h-32 bg-textDark" />
    </div>
  );
};
