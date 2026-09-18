const positions = [
  {
    title: "Applied AI Software Engineer Intern",
    company: "Salesforce",
    date: "May 2026 - Aug. 2026",
    desc: "Architected and shipped a distributed production platform for Marc Benioff and Salesforce's executive leadership team in the Office of the CEO; built a shared Node.js/TypeScript backend with 40+ REST APIs and an MCP tool server, improving AI query accuracy from 21% to 95% and reducing p50 latency 5x.",
  },
  {
    title: "Forge Team Member - Longhorn Life Sciences",
    company: "Texas Convergent",
    date: "Jan. 2026 - May 2026",
    desc: "Built a cross-platform Expo/React Native app for startup Longhorn Life Sciences' iDetect wound monitoring system, implementing BLE connectivity to a Raspberry Pi-hosted Vector Network Analyzer.",
  },
  {
    title: "Technology & Logistics Team Lead",
    company: "Hook Em' Hacks",
    date: "Nov. 2025 - May 2026",
    desc: "Led full-stack development and architecture of a production-ready hackathon website supporting 250+ participants, and directed event logistics and sponsor outreach.",
  },
  {
    title: "Undergraduate Research Software Engineer - Multimodal AI",
    company: "GISense Lab, The University of Texas at Austin",
    date: "Aug. 2025 - May 2026",
    desc: "Improved ML training throughput 45% by designing a distributed data pipeline using parallel and asynchronous processing to transform geospatial datasets into optimized HDF5 feature stores.",
  },
  {
    title: "Software Engineering Intern",
    company: "Depository Trust & Clearing Corporation",
    date: "Jun. 2025 - Aug. 2025",
    desc: "Engineered scalable Python pipelines to extract and validate multi-page audit reports, processing 1,000+ pages/hour, reducing manual workload by 10-15 hours/week.",
  },
  {
    title: "Undergraduate Research Software Engineer - Computer Vision",
    company: "Traffic Monitoring Lab, The University of Texas at Austin",
    date: "Aug. 2024 - May 2026",
    desc: "Designed and evaluated real-time computer vision systems using PyTorch, YOLOv8, and OpenCV with GPU-accelerated training, achieving 0.85+ mAP for low-latency vehicle detection.",
  },
] as const;

function Experience() {
  return (
    <div>
      <main className="font-body p-8">
        <p>Explore my working background!</p>
        <hr className="border-body-light-grey my-4 border-t-2" />
        {positions.map((position) => (
          <div key={`${position.company}-${position.title}`}>
            <p className="font-bold">{position.title}</p>
            <p className="mb-2">
              <i>{position.company}</i>
            </p>
            <p className="mb-2">{position.desc}</p>
            <p>{position.date}</p>
            <hr className="border-body-light-grey my-4 border-t-2" />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Experience;
