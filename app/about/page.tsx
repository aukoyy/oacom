'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from 'antd';
import { useState } from 'react';
import { Resume } from './resume/resume';

export default function About() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadResume = async () => {
    

    try {
      setIsGenerating(true);
      console.log('Generating PDF resume...');
      setTimeout(() => {
        console.log('PDF generation simulated (timeout complete).');
        setIsGenerating(false);
      }, 4000);
      // const pdfBytes = await pdfGenerator.generatePDF(Resume);
      // downloadPDF(pdfBytes, 'Oyvind_Aukner_Resume.pdf');
      
      console.log('Resume downloaded successfully');
    } catch (error) {
      console.error('Error generating resume:', error);
      // alert('Failed to generate resume. Please try again.');
    } finally {
      // setIsGenerating(false);
    }
  };

  return (
    <div className="flex justify-center mt-18">
      <main className="">
        <h1 className="text-4xl font-bold">About</h1>
        {/* <Link href="/about/resume">
          <Button className="m-0! p-0!" type="link">View Resume</Button>
        </Link> */}
        <div className="flex flex-col mt-12 lg:flex-row-reverse">
          <div className="relative w-full h-[400px] mb-8 lg:w-[750px] lg:h-[750px] lg:mb-0 lg:ml-32">
            <Image
              src="/profile-me-24-min.jpg"
              alt="About Me"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 lg:w-1/2">
            <p>
              Hi! I'm Øyvind
            </p>
            <p>
              I'm an AWS Cloud and Platform Engineer with a passion for building tools and infrastructure that help others move faster.
            </p>
            <p>
              I design and develop secure, scalable internal platforms on AWS that make cloud development simpler, safer, and more enjoyable for engineering teams.
            </p>

            <section className="mt-12 space-y-8">
              <div>
              </div>

              <div>
                <h2 className="text-2xl font-light text-slate-700">Recent Work Experience</h2>
                <h3 className="mt-4 text-lg">Cloud Engineer</h3>
                <p>Fremtind Forsikring AS <br /><span className="text-gray-500">Aug 2024 - now</span></p>
              </div>
              <div>
                <h2 className="my-2 text-2xl font-light text-slate-700">Certifications</h2>
                <ul className="space-y-1 list-disc list-inside">
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>AWS Certified Developer - Associate</li>
                  <li>AWS Certified Cloud Practitioner</li>
                </ul>
              </div>
              <div>
                <h2 className="my-2 text-2xl font-light text-slate-700">Education</h2>
                <h3 className="mt-4 text-lg">Bachelor of Informatics</h3>
                <p>Norwegian University of Science and Technology (NTNU) <br /><span className="text-gray-500">2016 - 2019</span></p>
              </div>
            </section>
              {/* <Button 
                type="primary" 
                onClick={handleDownloadResume}
                loading={isGenerating}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating PDF...' : 'Download Resume'}
              </Button> */}
          </div>
        </div>
      </main>
    </div>
  );
}