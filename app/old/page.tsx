import ClientWord from "../components/ClientWord";

const WORDS = [
  "portfolio",
  "server",
  "node",
  "arena",
  "dungeon",
  "lobby",
  "environment",
  "home",
  "interface",
] as const;

function Home() {
  return (
    <main className="font-body p-8">
      <h1 className="mb-8 text-4xl">👋🏼 Hey, I&apos;m Aryan.</h1>
      <p className="mb-6">
        Welcome to my{" "}
        <ClientWord
          initial="portfolio"
          words={WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />
        !
      </p>
      <p className="mb-6">
        I&apos;m a Computer Science &amp; Mathematics student at The
        University of Texas at Austin 🎓 based in Austin, TX.
      </p>
      <p className="mb-6">
        I&apos;ll be joining Salesforce as an Applied AI Software Engineer
        Intern in the Office of the CEO, San Francisco, improving AI query
        accuracy from 21% to 95% ⚡.
      </p>
      <p className="mb-6">
        When I&apos;m not deep in systems and performance work 🛠️, I dive
        into the engineering rabbit hole 🕳️.
      </p>

      <p>
        Contact me at{" "}
        <a
          href="mailto:aryanjalota483@gmail.com"
          className="hover:text-nice-blue underline transition-colors duration-200 ease-in-out"
        >
          aryanjalota483@gmail.com
        </a>
        .
      </p>
    </main>
  );
}

export default Home;
