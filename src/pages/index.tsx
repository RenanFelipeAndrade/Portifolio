import { LeftSide } from "@/components/LeftSide";
import { Navbar } from "@/components/Navbar";
import { RightSide } from "@/components/RightSide";
import Head from "next/head";
import Div100vh from "react-div-100vh";
import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Renan Andrade</title>
        <meta
          name="description"
          content="I am a fullstack developer and here is my portifolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Div100vh className="w-full font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </Div100vh>
    </>
  );
}
