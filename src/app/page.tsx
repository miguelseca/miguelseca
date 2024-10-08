import Projects from "@/components/Projects";
import Navbar from "@/components/NavigationBar/NavigationBar";
import About from "@/components/About";
import TimeLine from "@/components/TimeLine";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900">
      <Navbar />

      <div
        style={{ backgroundImage: "url('/images/back.jpg')" }}
        className="flex flex-col bg-cover bg-center bg-fixed items-center justify-center h-[calc(100vh-200px)] min-h-[400px] 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900"
      >
        <div className=" rounded-full">
          <Image
            src="/images/me.jpg"
            alt="miguel seca picture"
            width={250}
            height={250}
            layout="intrinsic"
            className=" rounded-full"
          />
        </div>
        <div className="text-3xl font-bold text-zinc-100 mt-5">
          Hello there. I&apos;m Miguel Seca
        </div>
      </div>

      <About />
      <TimeLine />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
