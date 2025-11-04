"use client";

import { ReactNode, useState } from "react";
import {
  LinkedInIcon,
  ExternalLinkIcon,
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
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      <div className="flex space-x-1 link">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex space-x-1 text-lg font-semibold"
        >
          <p>{label}</p><ExternalLinkIcon />
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
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      <button onClick={handleClipboardClick} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
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
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      {revealed ? (
        <button onClick={handlePhoneNumberClick} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
          <p>{label}</p><ClipboardIcon />
        </button>
      ) : (
        <button onClick={() => setRevealed(true)} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
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
        <div className="flex items-center space-x-8 mt-18">
          <div>
            <h1 className="text-4xl text-slate-700">All my links</h1>
            <div className="mt-8 space-y-4 text-lg">
              <ExternalLinkEntry
                icon={<GithubIcon className="w-8 text-white" />}
                label="GitHub"
                href="https://github.com/aukoyy"
              />
              <ExternalLinkEntry
                icon={<LinkedInIcon className="w-8 text-white" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/oyvindaukner/"
              />
              <ExternalLinkEntry
                icon={<YoutubeIcon className="w-8 text-white" />}
                label="Youtube"
                href="https://www.youtube.com/@AukOps"
              />
              <ClipboardEntry
                icon={<EmailIcon className="w-8 text-white" />}
                label="oyvind.auk@gmail.com"
              />
              <PhoneNumberEntry
                icon={<PhoneIcon className="w-8 text-white" />}
                label="+47 950 96 996"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}