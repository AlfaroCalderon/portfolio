import{ PresentationCard, Skills, Experience, Projects, Footer, ConnectForm } from "./components";

export default function Home() {
  return (
    <>
    <section id="home">
      <PresentationCard />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="experiences">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contacts">
      <ConnectForm />
    </section>
    <Footer />
    </>
  );
}
