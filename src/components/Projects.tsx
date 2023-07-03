import { SectionTitle } from "./SectionTitle";
import { ProjectsList } from "./ProjectsList";
import { ProjectsInfo } from "@/data/ProjectsInfo";

interface ProjectInfo {
  title: string;
  imgUrl: string;
  description: string;
  skills: string[]; // todo: define a class with all possibilities
  projectType?: string;
  githubLink?: string;
  finalUrl?: string;
}

export const Projects = () => {
  const projectInfoList: ProjectInfo[] = ProjectsInfo;
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto mdl:px-8 lgl:px-24 xl:px-4 py-24"
    >
      <SectionTitle
        className="mb-8"
        title="Some things I have built"
        titleNumber="02"
      />
      <ProjectsList projectsList={projectInfoList} />
    </section>
  );
};
