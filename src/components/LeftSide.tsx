import { TbBrandGithub } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

export const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <Link
          href="https://github.com/RenanFelipeAndrade"
          target={"_blank"}
          rel="noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/renan-felipe-andrade-da-silva-8b6676217/"
          target={"_blank"}
          rel="noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiLinkedin />
          </span>
        </Link>
      </div>
      <div className="w-[2px] h-32 bg-textDark" />
    </div>
  );
};
