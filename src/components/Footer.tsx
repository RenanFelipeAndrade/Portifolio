import { TbBrandGithub } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <Link
        href="https://github.com/RenanFelipeAndrade"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor boder-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/renan-felipe-andrade-da-silva-8b6676217/"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor boder-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SiLinkedin />
        </span>
      </Link>
    </footer>
  );
};
