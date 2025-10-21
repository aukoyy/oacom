import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center">
      <main className="max-w-7xl mt-12 mb-96 px-4 lg:px-24">
        <h1 className="text-4xl font-bold my-12">About</h1>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="relative w-full h-[400px] mb-8 lg:w-[750px] lg:h-[750px] lg:mb-0 lg:ml-32">
            <Image
              src="/oyvind-profile.jpeg"
              alt="About Me"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6 w-full lg:w-1/2">
            <p>
              Hi! I'm Øyvind Aukner
            </p>
            <p>
              Paragraph
            </p>

            <section className="mt-12 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                <p>Let's connect on <a href="https://www.linkedin.com/in/oyvindaukner/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">LinkedIn</a></p>
                <p>Or e-mail: <span className="text-sky-600">oyvind.auk@gmail.com</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <h3 className="text-lg mt-4">Bachelor of IT</h3>
                <p>Norwegian University of Science and Technology <br /><span className="text-gray-500">2016 - 2019</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
                <h3 className="text-lg mt-4">Title</h3>
                <p>Company <br /><span className="text-gray-500">2022 - 2023</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <p>Microsoft Office<br />Figma<br />Figjam<br />Canva<br />Google Sheets<br />Lightroom</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

