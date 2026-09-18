import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="mb-[10vh]">
      <div className="flex justify-center space-x-4">
        <Link
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-nice-blue h-6 w-6 transition-all duration-200 ease-in-out"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-nice-blue h-6 w-6 transition-all duration-200 ease-in-out"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
