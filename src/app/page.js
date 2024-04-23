import Image from "next/image";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Grid from "@/components/home/grid";
import Mobile from "@/components/home/mobile";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Grid />
      <Mobile />
    </>
  );
}
