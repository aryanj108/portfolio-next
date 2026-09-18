export interface Project {
  title: string;
  desc: string;
  summary: string;
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Distributed Lakehouse Analytics Platform",
    desc: "Architected a distributed lakehouse using Apache Spark and Delta Lake with ACID transactions and SQL analytics across 500M+ records.",
    summary: "Spark/Delta Lake lakehouse, 500M+ records",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Distributed Search Engine",
    desc: "Built a distributed search engine indexing 10M+ documents with inverted indexes and BM25 ranking at sub-100ms query latency across shards.",
    summary: "C++/Go search engine, 10M+ docs indexed",
    link: "https://github.com/aryanj108",
  },
  {
    title: "High-Performance Trading Engine",
    desc: "Engineered a cache-efficient C++17 limit order book processing 1M+ market events/sec using custom memory management.",
    summary: "C++17 limit order book, 1M+ events/sec",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Longhorn Life Sciences — iDetect",
    desc: "Cross-platform BLE app connecting to a Raspberry Pi-hosted Vector Network Analyzer for real-time wound infection monitoring, built for a health-tech startup.",
    summary: "BLE wound-monitoring app for a health startup",
    link: "https://github.com/aryanj108",
  },
  {
    title: "LLM Analytics Agent",
    desc: "Full-stack analytics microservice translating natural language into complex SQL using schema-aware RAG retrieval, improving query efficiency 70%.",
    summary: "NL-to-SQL agent with RAG, 70% faster queries",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Longhorn Living",
    desc: "Swipe-based housing-discovery app for UT Austin students, scoring 500+ listings against budget, distance, and lifestyle preferences.",
    summary: "Housing-discovery app, 500+ scored listings",
    link: "https://github.com/aryanj108/apartmentApp",
  },
  {
    title: "Hook Em' Hacks Website",
    desc: "Official website for a 250+ participant UT Austin hackathon, built end-to-end with a hand-rolled, dependency-free front end.",
    summary: "Hackathon site for 250+ participants",
    link: "https://www.hookemhacks.com/2025.html",
  },
  {
    title: "AI Parking Monitoring Lab",
    desc: "Real-time parking-space availability system using YOLO and OpenCV, served through a Flask web app with live notifications.",
    summary: "YOLO-based real-time parking monitor",
    link: "https://github.com/aryanj108/aiParkingMonitoringLab",
  },
  {
    title: "ASL Translator",
    desc: "Real-time American Sign Language translator using MediaPipe hand landmarks and a scikit-learn classifier, shipped as a browser demo.",
    summary: "Real-time ASL fingerspelling translator",
    link: "https://github.com/aryanj108/aslTranslator",
  },
  {
    title: "Notes Sharing Platform",
    desc: "Full-stack Spring Boot/React app for uploading, storing, and collaboratively sharing notes with AWS S3 backed storage.",
    summary: "Spring Boot/React notes-sharing app",
    link: "https://github.com/aryanj108",
  },
  {
    title: "PDF Data Extraction Toolkit",
    desc: "Point-and-click desktop tool for extracting structured data from unstructured PDFs, built during an internship at DTCC.",
    summary: "PDF data extraction toolkit, built at DTCC",
    link: "https://github.com/aryanj108",
  },
  {
    title: "SnapSteps",
    desc: "Screen-activity recorder that auto-generates a polished, step-by-step PDF tutorial from a recorded workflow, cutting doc time 50-60%.",
    summary: "Auto-generates PDF tutorials, built at DTCC",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Volleyball Video Analysis Platform",
    desc: "Computer vision platform using YOLOv8 and PyTorch to turn recorded volleyball match footage into searchable player and performance data.",
    summary: "CV-powered volleyball match analysis",
    link: "https://github.com/aryanj108",
  },
  {
    title: "Interactive 3D Portfolio",
    desc: "A real-time WebGL office scene you can navigate freely, with a fully functional Windows 95-style desktop running live inside the CRT monitor, built with Three.js and React.",
    summary: "WebGL 3D office scene with a live desktop",
    link: "https://aryanj108.github.io",
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    summary: "This website!",
    link: "/",
  },
];
