import Image from "next/image";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

interface ProjectsListProps {
  projectsList: ProjectInfo[];
}

interface ProjectInfo {
  title: string;
  imgUrl: string;
  description: string;
  skills: string[]; // todo: define a class with all possibilities
  projectType?: string;
  githubLink?: string;
  finalUrl?: string;
}

export const ProjectsList = ({ projectsList }: ProjectsListProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-28">
      {projectsList.map((project, index) => {
        const {
          projectType,
          finalUrl,
          description,
          title,
          githubLink,
          imgUrl,
          skills,
        } = project;
        return (
          <div key={index}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              } items-center gap-6`}
            >
              {finalUrl ? (
                <Link
                  className="w-full xl:w-1/2 h-auto group"
                  href={finalUrl}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
                      src={imgUrl}
                      className="w-full h-full object-center rounded-sm opacity-80 group-hover:opacity-100 duration-300"
                      alt={`project ${index + 1} image`}
                    />
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-textGreen/10 group-hover:bg-transparent rounded-sm transition-colors duration-300"></div>
                  </div>
                </Link>
              ) : (
                <div className="w-full xl:w-1/2 h-auto group">
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain rounded-sm opacity-80 group-hover:opacity-100 duration-300"
                      src={imgUrl}
                      alt={`project ${index + 1} image`}
                    />
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-textGreen/10 group-hover:bg-transparent rounded-sm transition-colors duration-300"></div>
                  </div>
                </div>
              )}

              <div
                className={`w-full xl:w-1/2 flex flex-col gap-6 xl:items-end xl:text-right z-20`}
              >
                <div className="flex flex-col gap-2">
                  {projectType && (
                    <span className="font-titleFont text-textGreen text-sm tracking-wide">
                      {projectType}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>

                <p
                  className={`bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:shadow-lg ${
                    index % 2 === 0 ? "xl:-ml-16 text-left" : "xl:-mr-16"
                  } `}
                >
                  {description}
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      {/* capitalize */}
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl flex gap-4">
                  {githubLink && (
                    <Link
                      className="hover:text-textGreen duration-300"
                      href={githubLink}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <TbBrandGithub />
                    </Link>
                  )}
                  {finalUrl && (
                    <Link
                      className="hover:text-textGreen duration-300"
                      href={finalUrl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <RxOpenInNewWindow />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
