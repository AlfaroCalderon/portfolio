import Image from "next/image";
import PresentationCard from "./components/PresentationCard/PresentationCard";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

export default function Home() {
  return (
    <>
    <PresentationCard />
    <Skills />
    <Experience />
    </>
  );
}
