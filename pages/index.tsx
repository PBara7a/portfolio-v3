import { PageInfo, Project, Skill, Social, Experience } from "../types";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import fetchPageInfo from "../utils/fetchPageInfo";
import fetchSkills from "../utils/fetchSkills";
import fetchSocials from "../utils/fetchSocials";
import fetchProjects from "../utils/fetchProjects";
import fetchWorkExperience from "../utils/fetchExperience";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  socials: Array<Social>;
  skills: Array<Skill>;
  projects: Array<Project>;
};

export default function Home({ pageInfo, skills, socials, projects }: Props) {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent scroll-smooth">
      <Head>
        <title>Paulo Barata</title>
        <meta name="description" content="Paulo Barata's portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start mb-[70%] md:mb-0">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start mb-[70%] md:mb-0">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start mb-[20%] md:mb-0">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start mb-[40%] md:mb-0">
        <Projects projects={projects} />
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
              src={urlFor(pageInfo.heroImage).url()}
              alt="Go back up"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  const projects = await fetchProjects();
  const orderedSkills = skills
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 12);
  return {
    props: {
      pageInfo,
      skills: orderedSkills,
      socials,
      projects,
    },
    revalidate: 10, // TODO: Change later when ready to deploy
  };
}
