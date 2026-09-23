import Image from "next/image";
import Hero from "./components/heroSection/Hero";
import Libery from "./components/libery/libery";

export const DataPromise = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json()
  return data
}

export default async function Home() {

  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <div className="hero-section-container container mx-auto my-15">
        <Hero />
      </div>
      <div className="libery-section my-20">
        <Libery />
      </div>
    </div>
  );
}
