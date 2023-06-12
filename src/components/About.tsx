import { SectionTitle } from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

export const About = () => {
  const iconSize = { width: 80, height: 80 };
  const technologies = [
    "TypeScript",
    "NextJS",
    "ExpressJS",
    "ReactJS",
    "MongoDB",
    "Django Rest Framework",
    "Tailwindcss",
    "Python",
  ];
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-24 mdl:px-16 flex flex-col"
    >
      <SectionTitle title="About me" titleNumber={"01"} className="mb-8" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there! I&apos;m Renan Andrade, and I have a passion for
            creating amazing things on the web. Since 2020, web development has
            captivated me, and I&apos;ve been hooked ever since.
          </p>

          <p>
            When I first delved into the world of coding, I started with Python,
            learned the basics of programming and then learned HTML, JavaScript,
            and CSS. These foundational technologies opened up endless
            possibilities. Over time, I&apos;ve also gained expertise in other
            powerful tools like Django Rest Framework, Next.js, TypeScript, and
            Express.js. With these skills, I&apos;m able to build full-stack
            applications that seamlessly combine functionality and design.
          </p>

          <p>
            What excites me the most about web development is the ability to
            bring ideas to life. I strive to create user-friendly and visually
            appealing experiences that make a lasting impression. Whether
            it&apos;s crafting an intuitive interface or optimizing website
            performance, I&apos;m always up for the challenge. Additionally, I
            find excitement in creating backends, validating and manipulating
            data, and building logical systems to ensure seamless functionality
            and enhance user satisfaction.
          </p>

          <p>
            Feel free to explore my portfolio, where you&apos;ll find a
            collection of projects that highlight my journey and growth as a
            developer. Each project tells a unique story and showcases my
            dedication to pushing the boundaries of what I can achieve.
          </p>

          <p>
            Let&apos;s connect! I&apos;d love to hear about your specific needs
            and collaborate on turning your ideas into reality. Get in touch,
            and together we can create something special.
          </p>

          <p>
            Here are a few technologies I have been developing with recently:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((techName, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {techName}
              </li>
            ))}
          </ul>
        </div>

        {/* 
      elements order follows their heights 
    eg. if react icon is the heighest (closer to the top of the screen),
            then it is the first element in the jsx
          */}
        <div className="hidden lgl:flex lgl:w-1/3 h-80 relative">
          <div className="absolute rounded-lg top-0 right-0 group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"react.svg"}
                alt="reactjs icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg top-[5%] left-0 group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"typescript.svg"}
                alt="typescript icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg top-[38%] right-[32%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"javascript.svg"}
                alt="javascript icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg -bottom-[1%] right-[7%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"mongo.svg"}
                alt="mongodb icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg bottom-[8%] -left-[4%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"express.svg"}
                alt="expressjs icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg -bottom-[70%] left-[0%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"next.svg"}
                alt="next icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg -bottom-[33%] left-[27%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"tailwind.svg"}
                alt="tailwind icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg -bottom-[57%] -right-[8%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"django.svg"}
                alt="django icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          <div className="absolute rounded-lg -bottom-[100%] right-[17%] group">
            <div className="w-full h-20 relative z-20 flex pl-6 bg-bodyColor lgl:pl-0">
              <Image
                className="rounded-lg"
                width={iconSize.width}
                height={iconSize.height}
                src={"python.svg"}
                alt="python icon"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute top-4 left-4 lgl:inline-flex w-full h-20 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
