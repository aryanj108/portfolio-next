import Link from "next/link";

const projects = [
  {
    title: "Distributed Lakehouse Analytics Platform",
    desc: "Architected a distributed lakehouse using Apache Spark and Delta Lake, implementing ACID transactions and SQL analytics across 500M+ records. Reduced repeated-query latency 60% with a FastAPI query service using Redis caching.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Distributed Search Engine",
    desc: "Built a distributed search engine indexing 10M+ documents with inverted indexes and BM25 ranking at sub-100ms query latency across shards, using C++, Go, gRPC, Redis, and RocksDB.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "High-Performance Trading Engine",
    desc: "Engineered a cache-efficient C++17 limit order book processing 1M+ market events/sec, achieving 3x higher throughput by parallelizing order processing with std::thread and producer-consumer queues.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Longhorn Life Sciences — iDetect",
    desc: "Cross-platform BLE app connecting to a Raspberry Pi-hosted Vector Network Analyzer for real-time wound infection monitoring, built for a health-tech startup.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "LLM Analytics Agent",
    desc: "Full-stack analytics microservice translating natural language into complex SQL using schema-aware RAG retrieval, improving query efficiency 70%.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Longhorn Living",
    desc: "Swipe-based housing-discovery app for UT Austin students, scoring 500+ listings against budget, distance, and lifestyle preferences.",
    link: "https://github.com/aryanj108/apartmentApp",
  },
  {
    title: "Hook Em' Hacks Website",
    desc: "Official website for a 250+ participant UT Austin hackathon, built end-to-end with a hand-rolled, dependency-free front end.",
    link: "https://www.hookemhacks.com/2025.html",
  },
  {
    title: "AI Parking Monitoring Lab",
    desc: "Real-time parking-space availability system using YOLO and OpenCV, served through a Flask web app with live notifications.",
    link: "https://github.com/aryanj108/aiParkingMonitoringLab",
  },
  {
    title: "ASL Translator",
    desc: "Real-time American Sign Language translator using MediaPipe hand landmarks and a scikit-learn classifier, shipped as a browser demo.",
    link: "https://github.com/aryanj108/aslTranslator",
  },
  {
    title: "Notes Sharing Platform",
    desc: "Full-stack Spring Boot/React app for uploading, storing, and collaboratively sharing notes with AWS S3 backed storage.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "PDF Data Extraction Toolkit",
    desc: "Point-and-click desktop tool for extracting structured data from unstructured PDFs, built during an internship at DTCC.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "SnapSteps",
    desc: "Screen-activity recorder that auto-generates a polished, step-by-step PDF tutorial from a recorded workflow, cutting doc time 50-60%.",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Volleyball Video Analysis Platform",
    desc: "Computer vision platform using YOLOv8 and PyTorch to turn recorded volleyball match footage into searchable player and performance data.",
    link: "https://github.com/aryanj108",
  },
] as const;

function Projects() {
  return (
    <div>
      <main className="font-body p-8">
        <p>🔨 A list of my engineering masterpieces.</p>
        <hr className="border-body-light-grey my-4 border-t-2" />
        {projects.map((project) => (
          <div key={project.link}>
            <a
              href={project.link}
              className="hover:text-nice-blue cursor-pointer font-bold underline transition-all duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <p className="mb-4">{project.desc}</p>
          </div>
        ))}
        <Link
          href="/"
          className="hover:text-nice-blue cursor-pointer font-bold underline transition-all duration-200 ease-in-out"
        >
          Portfolio
        </Link>
        <p className="mb-4">
          This website! Describes myself and lists my works.
        </p>
      </main>
    </div>
  );
}

export default Projects;
