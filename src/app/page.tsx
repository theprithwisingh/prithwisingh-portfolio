import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectSection from "@/components/ProjectSection";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 sm:px-6">
        <Header />
        <About />
        <Experience />
        <Skills />
        <ProjectSection />
        <Achievements />
        <Education />
        <Footer />
      </main>
      <FloatingNav />
    </>
  );
}
