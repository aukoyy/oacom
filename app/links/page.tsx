"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import {
  LinkedInIcon,
  ExternalLink,
  EmailIcon,
  GithubIcon,
  YoutubeIcon,
  ClipboardIcon
} from "../components/icons";

interface LinkEntryProps {
  icon: ReactNode;
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
  clipboard?: boolean;
}

function LinkEntry({ icon, label, href, className, external, clipboard }: LinkEntryProps) {
  const handleClipboardClick = async () => {
    if (clipboard) {
      try {
        await navigator.clipboard.writeText(label);
        // You could add a toast notification here if you want
        console.log('Copied to clipboard:', label);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  };

  return (
    <div className={classNames("flex space-x-4 items-center", className)}>
      <div className="p-2 bg-slate-800 rounded-full">
        {icon}
      </div>
      <div className={classNames("flex space-x-1", external ? "link" : clipboard ? "cursor-pointer text-sky-500 hover:text-sky-400" : "text-sky-500")}>
        {clipboard ? (
          <button
            onClick={handleClipboardClick}
            className={classNames("text-lg font-semibold text-left cursor-pointer flex space-x-1")}
          >
            <p>{label}</p><ClipboardIcon />
          </button>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("text-lg font-semibold")}
          >
            {label}
          </a>
        )}
        {external && <ExternalLink />}
      </div>
    </div>
  );
}

export default function Links() {
  return (
    <div className="">
      <main className="">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl text-slate-700">All my links</h1>
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
                clipboard
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}