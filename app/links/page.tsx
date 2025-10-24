"use client";

import { ReactNode, useState } from "react";
import {
  LinkedInIcon,
  ExternalLink,
  EmailIcon,
  GithubIcon,
  YoutubeIcon,
  ClipboardIcon,
  PhoneIcon
} from "../components/icons";

interface LinkEntryProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

function ExternalLinkEntry({ icon, label, href }: LinkEntryProps) {
  return (
    <div className="flex space-x-4 items-center">
      <div className="p-2 bg-slate-700 rounded-full">
        {icon}
      </div>
      <div className="flex space-x-1 link">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold flex space-x-1"
        >
          <p>{label}</p><ExternalLink />
        </a>
      </div>
    </div>
  );
}

function ClipboardEntry({ icon, label }: { icon: ReactNode, label: string }) {
  const handleClipboardClick = async () => {
    // todo: You could add a toast notification here if you want
    navigator.clipboard.writeText(label);
  };
  return (
    <div className="flex space-x-4 items-center">
      <div className="p-2 bg-slate-700 rounded-full">
        {icon}
      </div>
      <button onClick={handleClipboardClick} className="text-lg font-semibold cursor-pointer flex space-x-1 link">
        <p>{label}</p><ClipboardIcon />
      </button>
    </div>
  );
}

function PhoneNumberEntry({ icon, label }: { icon: ReactNode, label: string }) {
  const [revealed, setRevealed] = useState(false);
  const handlePhoneNumberClick = () => {
    navigator.clipboard.writeText(label.replace(/\s/g, ''));
  };
  return (
    <div className="flex space-x-4 items-center">
      <div className="p-2 bg-slate-700 rounded-full">
        {icon}
      </div>
      {revealed ? (
        <button onClick={handlePhoneNumberClick} className="text-lg font-semibold cursor-pointer flex space-x-1 link">
          <p>{label}</p><ClipboardIcon />
        </button>
      ) : (
        <button onClick={() => setRevealed(true)} className="text-lg font-semibold cursor-pointer flex space-x-1 link">
          <p>Reveal</p>
        </button>
      )}
    </div>
  );
}


// PhoneNumberEntry with modal
//   -> CvLinkEntry? external or generated?

export default function Links() {
  return (
    <div className="">
      <main className="">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl text-slate-700">All my links</h1>
            <div className="space-y-4 text-lg mt-8">
              <ExternalLinkEntry
                icon={<GithubIcon className="text-white w-8" />}
                label="GitHub"
                href="https://github.com/aukoyy"
              />
              <ExternalLinkEntry
                icon={<LinkedInIcon className="text-white w-8" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/oyvindaukner/"
              />
              <ExternalLinkEntry
                icon={<YoutubeIcon className="text-white w-8" />}
                label="Youtube"
                href="https://www.youtube.com/@AukOps"
              />
              <ClipboardEntry
                icon={<EmailIcon className="text-white w-8" />}
                label="oyvind.auk@gmail.com"
              />
              <PhoneNumberEntry
                icon={<PhoneIcon className="text-white w-8" />}
                label="+47 950 96 996"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}