import ClientWord from "../../components/ClientWord";
import ClientTechView from "../../components/ClientTechView";

const TITLE_WORDS = [
  "Documentation",
  "Outline",
  "Summary",
  "Rundown",
  "Synopsis",
  "Overview",
] as const;

const COMPUTER_WORDS = [
  "tech support",
  "digital guru",
  "computer expert",
  "IT guy",
  "sysadmin",
  "technician",
] as const;

const CURRENT_TITLE_WORDS = [
  "Presently",
  "Recently",
  "Nowadays",
  "Lately",
] as const;

const TECH_WORDS = ["Technology", "Stacks", "Services", "Tools"] as const;

const LEARNING_WORDS = [
  "software design",
  "data structures",
  "algorithims",
  "discrete math",
  "operating systems",
  "databases",
  "machine learning",
  "networking",
  "clocked circuits",
  "electrical circuits",
  "embedded programming",
  "microprocessors",
  "statistics",
] as const;

function About() {
  return (
    <main className="font-body p-8">
      <span className="text-3xl">📝</span>{" "}
      <ClientWord
        initial="Documentation"
        words={TITLE_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        For as long as I can remember, I&apos;ve always been the{" "}
        <ClientWord
          initial="tech support"
          words={COMPUTER_WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />{" "}
        in my family 💻. Systems and performance work pulled me in early, and
        I&apos;ve stayed there ever since.
      </p>
      <p className="mt-6 mb-8">
        Of course, I exist outside of tech. I love doing more than watching,
        leading more than following. I learn through application and live off
        logic. If you are hiring, reach out via email!
      </p>
      <span className="text-3xl">🔧</span>{" "}
      <ClientWord
        initial="Skills"
        words={TECH_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        I&apos;m quite the multi-disciplinary engineer having dabbled in all the
        fun stuff:
      </p>
      <div className="mb-8">
        <ClientTechView />
      </div>
      <span className="text-3xl">📌</span>{" "}
      <ClientWord
        initial="Currently"
        words={CURRENT_TITLE_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        I&apos;m a Computer Science &amp; Mathematics student at The
        University of Texas at Austin where I&apos;m actively learning all
        the incredible in&apos;s and out&apos;s of{" "}
        <ClientWord
          initial="software design"
          words={LEARNING_WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />{" "}
        💻.
      </p>
      <p className="mt-6">
        Whenever I manage to find time outside of coursework, I love
        contributing to research like:
      </p>
      <ul className="mt-4 mb-8 list-inside list-disc space-y-1 pl-8">
        <li>GISense Lab — Multimodal AI</li>
        <li>Traffic Monitoring Lab — Computer Vision</li>
      </ul>
    </main>
  );
}

export default About;
