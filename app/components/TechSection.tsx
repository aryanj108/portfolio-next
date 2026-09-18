import type { ComponentType } from "react";
import {
  SiCplusplus,
  SiPython,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiNodedotjs,
  SiFastapi,
  SiReact,
  SiSpringboot,
  SiPytorch,
  SiApachespark,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiRocksdb,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGit,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";

export type TechSectionId = "languages" | "web" | "ml" | "tools";

type IconComponent = ComponentType<{ className?: string }>;

interface TechIcon {
  Icon: IconComponent;
  name: string;
}

const ICON_CLASS = "w-6 h-6";

const LANGUAGE_ICONS = [
  { Icon: SiCplusplus, name: "C++17" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiGo, name: "Go" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiPostgresql, name: "SQL" },
] as const satisfies readonly TechIcon[];

const WEB_ICONS = [
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiFastapi, name: "FastAPI" },
  { Icon: SiReact, name: "React" },
  { Icon: SiSpringboot, name: "Spring Boot" },
  { Icon: SiPytorch, name: "PyTorch" },
] as const satisfies readonly TechIcon[];

const ML_ICONS = [
  { Icon: SiApachespark, name: "Apache Spark" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiSqlite, name: "SQLite" },
  { Icon: SiRedis, name: "Redis" },
  { Icon: SiRocksdb, name: "RocksDB" },
] as const satisfies readonly TechIcon[];

const TOOL_ICONS = [
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiKubernetes, name: "Kubernetes" },
  { Icon: SiGit, name: "Git" },
  { Icon: FaAws, name: "AWS" },
] as const satisfies readonly TechIcon[];

function renderIcons(icons: readonly TechIcon[]) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-6">
      {icons.map(({ Icon, name }, index) => (
        <li
          key={name}
          className="animate-slideDown flex translate-y-4 items-center gap-2 opacity-0 motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Icon className={ICON_CLASS} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

function TechSection({ activeSection }: { activeSection: TechSectionId }) {
  return (
    <div className={`min-h-[264px] transition-opacity ${activeSection}`}>
      {activeSection === "languages" && renderIcons(LANGUAGE_ICONS)}
      {activeSection === "web" && renderIcons(WEB_ICONS)}
      {activeSection === "ml" && renderIcons(ML_ICONS)}
      {activeSection === "tools" && renderIcons(TOOL_ICONS)}
    </div>
  );
}

export default TechSection;
