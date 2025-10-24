import Image from "next/image";

// ? should I convert this whole page to a mdx file?

export default function About() {
  return (
    <div className="flex justify-center">
      <main className="">
        <h1 className="text-4xl font-bold">About</h1>
        <div className="flex flex-col lg:flex-row-reverse mt-12">
          <div className="relative w-full h-[400px] mb-8 lg:w-[750px] lg:h-[750px] lg:mb-0 lg:ml-32">
            <Image
              src="/profile-me-24-min.jpg"
              alt="About Me"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6 w-full lg:w-1/2">
            <p>
              Hi! I'm Øyvind
            </p>
            <p>
              I’m an AWS Cloud & Platform Engineer with a passion for building tools and infrastructure that help others move faster.
            </p>
            <p>
              I design and develop secure, scalable internal platforms on AWS that make cloud development simpler, safer, and more enjoyable for engineering teams.
            </p>

            <section className="mt-12 space-y-8">
              <div>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-slate-700">Recent Work Experience</h2>
                <h3 className="text-lg mt-4">Cloud Engineer</h3>
                <p>Fremtind Forsikring AS <br /><span className="text-gray-500">Aug 2024 - now</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-light text-slate-700 my-2">Certifications</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>AWS Certified Developer - Associate</li>
                  <li>AWS Certified Cloud Practitioner</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-light text-slate-700 my-2">Education</h2>
                <h3 className="text-lg mt-4">Bachelor of Informatics</h3>
                <p>Norwegian University of Science and Technology (NTNU) <br /><span className="text-gray-500">2016 - 2019</span></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

