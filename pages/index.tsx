import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-auto z-0">
      <Head>
        <title>Paulo Barata</title>
        <meta name="description" content="Paulo Barata's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* SKILLS */}

      {/* PROJETCS */}

      {/* EXPERIENCE */}

      {/* CONTACT */}
    </div>
  );
}
