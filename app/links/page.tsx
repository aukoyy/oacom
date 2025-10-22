import { ReactNode } from "react";
import classNames from "classnames";
import {
  LinkedInIcon,
  ExternalLink,
  EmailIcon,
  GithubIcon,
  YoutubeIcon
} from "../components/icons";

interface LinkEntryProps {
  icon: ReactNode;
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
}

function LinkEntry({ icon, label, href, className, external }: LinkEntryProps) {
  return (
    <div className={classNames("flex space-x-4 items-center", className)}>
      <div className="p-2 bg-slate-800 rounded-full">
        {icon}
      </div>
      <div className={classNames("flex space-x-1", external ? "link" : "text-sky-500")}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames("text-lg font-semibold", external ? "cursor-pointer" : "cursor-text")}
        >
          {label}
        </a>
        {external && <ExternalLink />}
      </div>
    </div>
  );
}

export default function Links() {
  return (
    <div className="flex justify-center mt-36">
      <main className="max-w-7xl">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">All my links</h1>
            <div className="space-y-4 text-lg mt-8">
              <LinkEntry
                icon={<GithubIcon className="text-white w-8" />}
                label="GitHub"
                href="https://github.com/aukoyy"
                external
              />
              <LinkEntry
                icon={<LinkedInIcon className="text-white w-8" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/oyvindaukner/"
                external
              />
              <LinkEntry
                icon={<YoutubeIcon className="text-white w-8" />}
                label="Youtube"
                href="https://www.youtube.com/@AukOps"
                external
              />
              <LinkEntry
                icon={<EmailIcon className="text-white w-8" />}
                label="oyvind.auk@gmail.com"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}