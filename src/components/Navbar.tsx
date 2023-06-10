import Link from "next/link";
import { motion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import Div100vh from "react-div-100vh";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";

export const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = ["Home", "About me", "Projects", "Contact"];
  let delay = 0;

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.target instanceof HTMLElement && e.target.contains(ref.current))
      setShowMenu(false);
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={"/"}>
            <h3>RA</h3>
          </Link>
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7 ">
            {menuItems &&
              menuItems.map((menuItem, index) => {
                if (delay !== 0 && index === 0) delay = 0;
                delay += 0.05;
                return (
                  <motion.li
                    key={index}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.15,
                      delay: delay,
                    }}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <Link
                      href={`#${menuItem.split(" ")[0].toLowerCase()}`} // only first name and in lower case
                      onClick={handleScroll}
                    >
                      {menuItem.toLowerCase() !== "home" && (
                        <span className="text-textGreen">0{index}.</span>
                      )}
                      {menuItem}
                    </Link>
                  </motion.li>
                );
              })}
          </ul>
        </div>

        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          onClick={() => setShowMenu(true)}
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {showMenu && (
          <Div100vh
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full bg-black/50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <span className="w-full">
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500 ml-auto"
                />
              </span>
              <div>
                <ul className="flex flex-col text-base gap-7">
                  {menuItems &&
                    menuItems.map((menuItem, index) => {
                      if (delay !== 0 && index === 0) delay = 0;
                      delay += 0.05;
                      return (
                        <motion.li
                          key={index}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.15,
                            delay: delay,
                            ease: "easeIn",
                          }}
                          className="flex items-center justify-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <Link
                            href={`#${menuItem.split(" ")[0].toLowerCase()}`} // only first name and in lower case
                            onClick={handleScroll}
                          >
                            {menuItem.toLowerCase() !== "home" && (
                              <span className="text-textGreen">0{index}.</span>
                            )}
                            {menuItem}
                          </Link>
                        </motion.li>
                      );
                    })}
                </ul>
                <div className="flex gap-4 justify-center mt-6 mb-2">
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                    href="https://github.com/RenanFelipeAndrade"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.6, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/renan-felipe-andrade-da-silva-8b6676217/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SiLinkedin />
                    </span>
                  </motion.a>
                </div>
                <motion.a
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.15, delay: 0.7, ease: "easeIn" }}
                  className="mt-5"
                  href="mailto:fel9.renan02@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className="text-sm w-72 tracking-widest text-textGreen text-center">
                    fel9.renan02@gmail.com
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </Div100vh>
        )}
      </div>
    </div>
  );
};
