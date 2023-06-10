import Link from "next/link";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer text-center mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in touch</h2>
      <p className="text-textDark max-w-[600px]">
        I&apos;m looking for opportunities to start my web developer carrer.
        <br />
        My inbox will always be open for everyone who wants to say a simple
        &quot;hi&quot; or send any questions!
      </p>
      <Link href="mailto:fel9.renan02@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Contact me
        </button>
      </Link>
    </section>
  );
};
