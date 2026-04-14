import { Hero } from "@/components/home/Hero";
import { Results } from "@/components/home/Results";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Sectors } from "@/components/home/Sectors";
import { Blog } from "@/components/home/Blog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <Services />
      <About />
      <Sectors />
      <Blog />
    </>
  );
}
