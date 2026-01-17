import Image from "next/image";

export default function Resume() {
  return (
    <div className="space-y-2 mt-18">
      <main className="space-y-8">
        <h2 className="text-4xl font-bold">Experience</h2>
        <h2 className="text-4xl font-bold">Certifications</h2>
        <h2 className="text-4xl font-bold">Education</h2>
      </main>
      <p>Include everything here. </p>
      <p>No link to this page</p>
      <p>Could be called resume-generator</p>

      <p>By each entry, display a toggle input</p>
      <p>When downloading, download only selected entries</p>
    </div>
  );
}

