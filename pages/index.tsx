import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent scroll-smooth">
      <Head>
        <title>Paulo Barata</title>
        <meta name="description" content="Paulo Barata's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start mb-[70%] md:mb-0">
        <Hero />
      </section>

      <section id="about" className="snap-start mb-[70%] md:mb-0">
        <About />
      </section>

      <section id="skills" className="snap-start mb-[20%] md:mb-0">
        <Skills />
      </section>

      <section id="projects" className="snap-start mb-[40%] md:mb-0">
        <Projects />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-4 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="profile-pic.png"
              alt="Go back up"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
