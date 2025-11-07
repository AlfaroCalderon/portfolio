import Image from "next/image";
import{ PresentationCard, Skills, Experience, Projects, Footer, ConnectForm } from "./components";

export default function Home() {
  return (
    <>
    <PresentationCard />
    <Skills />
    <Experience />
    <Projects />
    <ConnectForm />
    <Footer />
    </>
  );
}
