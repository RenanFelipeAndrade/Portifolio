import { SectionTitle } from "./SectionTitle";
import { ProjectsList } from "./ProjectsList";

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
  const projectInfoList: ProjectInfo[] = [
    {
      title: "Next Level Week",
      description:
        "The project combined Twitch&apos;s API with ExpressJs and NextJs for a responsive SPA. Users can create and view gaming ads using Discord for login. The server, built with Expressjs, offers data fetching and ad creation endpoints. TypeScript ensures code safety.",
      skills: [
        "NextJS",
        "Tailwind",
        "ExpressJS",
        "Next-auth",
        "Typescript",
        "Vercel",
      ],
      imgUrl: "/nlw-web.png",
      projectType: "Featured Project",
      githubLink: "https://github.com/RenanFelipeAndrade/NLW-Web",
      finalUrl: "https://nlw-web-phi.vercel.app/",
    },
    {
      title: "Ecommerce",
      description:
        "This project was created using Next.js, TypeScript, and Sanity. It is fully responsive for desktops, tablets, and smartphones. The interface was developed with NextJS and TypeScript, styled using vanilla CSS. Sanity is integrated for product and content management. It also has a Stripe integration in the checkout process.",
      skills: ["NextJS", "Sanity", "Stripe", "Typescript", "Vercel"],
      imgUrl: "/ecommerce.png",
      projectType: "Featured Project",
      githubLink: "https://github.com/RenanFelipeAndrade/ecommerce",
      finalUrl: "https://ecommerce-sanity-stripe-hazel.vercel.app/",
    },
  ];

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
