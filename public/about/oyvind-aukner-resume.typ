#import "@preview/basic-resume:0.2.9": *


#set text(font: "New Computer Modern", size: 11pt)
#set page(paper: "a4", margin: 0.5in)
#show heading: set text(fill: rgb("#0069a8"))

#show heading.where(level: 1): set text(size: 24pt)

#show heading.where(level: 2): it => {
  it
  v(-0.7em) // vertical space
  line(length: 100%, stroke: 1pt + black)
  v(0.5em) // space after the line
}

#let today = datetime.today().display("[month repr:long] [day], [year]")


= Øyvind Aukner

Senior Cloud / Platform Engineer (AWS) · Norway · Open to relocation to Australia

+47 950 96 996 ·
oyvind.auk\@gmail.com ·
#underline(text(fill: rgb("#00a6f4"), link("https://oyvindaukner.com")[oyvindaukner.com]))
// #text(fill: rgb("#6a7282"))[_Best times for calls: 7:00-9:00 AM CET (4:00-6:00 PM AEST)_]

== Experience

/* #work(
  title: "Senior Cloud Engineer",
  location: "Brisbane, Australia",
  company: "ACME inc · Awesome company",
  dates: dates-helper(start-date: "Apr 2026", end-date: "Present"),
)
- Owned and evolved AWS infrastructure using CDK (TypeScript) as a central platform engineer, standardising deployments and automation across the organisation */

#work(
  title: "Senior Cloud Engineer",
  location: "Oslo, Norway",
  company: "Fremtind Forsikring AS · National insurance provider",
  dates: dates-helper(start-date: "Aug 2024", end-date: "Present"),
)
- Owned and evolved AWS infrastructure using CDK (TypeScript) as a central platform engineer, standardising deployments, automation and self service workflows across the organisation
// - Designed, launched, and managed en image mirroring solution in AWS ECR
- Built and managed a secure company-wide SFTP platform using AWS Transfer Family and GuardDuty, supporting file transfers across multiple teams and external partners
- Served as security champion and AWS community of practice lead, driving knowledge sharing initiatives on best practices and security topics

#work(
  title: "Software Engineer",
  location: "Oslo, Norway",
  company: "Cargotron AS · Transport management solutions",
  dates: dates-helper(start-date: "Jan 2024", end-date: "Aug 2024"),
)
- Salvaged and launched TDoc timekeeping system after previous consultancy bankruptcy//, ensuring Norwegian Road Administration compliance
- Stabilised two React codebases and collaborated on C\# backend development and API integration
// - Collaborated on backend development in C\#, refining RESTful JSON-based client-server communication to enhance system reliability

#work(
  title: "Senior Fullstack Developer",
  location: "Oslo, Norway",
  company: "Fleks AS · Car subscription service",
  dates: dates-helper(start-date: "Aug 2022", end-date: "Dec 2023"),
)
- Built a new store with grid view and product page using modern web technologies
- Designed and implemented functionality for adding charging chips to vehicles in the operations app
- Developed AWS Lambda functions supporting a new insurance offering
// - Made branded dashboards for Oslo office using React and cloud infrastructure

#work(
  title: "Fullstack Developer",
  location: "Oslo, Norway",
  company: "Capra Consulting AS · Consulting services",
  dates: dates-helper(start-date: "Jan 2020", end-date: "Aug 2022"),
)
- Implemented App charging microservice at APCOA Norway
- Worked with Yara to implement dashboards and IoT data visualisation on AWS
- Worked on logged-in user pages for Gjensidige using modern frontend frameworks

/* #work(
  title: "Frontend Developer",
  location: "Trondheim, Norway",
  company: "Skillsets AS",
  dates: dates-helper(start-date: "Jun 2018", end-date: "Dec 2019"),
)
- Implemented the company website using modern frontend technologies
- Made MVPs and worked on front-end components for various client projects
- Collaborated with design team to create responsive and user-friendly interfaces */

#work(
  title: "Military Service (Sergeant)",
  location: "Northern Norway",
  company: "Norwegian Armed Forces",
  dates: dates-helper(start-date: "2011", end-date: "2015"),
)

// Grou p leader for two mortar tanks in the battalion’s mortar p latoon.

== Education

#edu(
  institution: "NTNU - Norwegian University of Science and Technology",
  location: "Norway",
  dates: dates-helper(start-date: "Aug 2016", end-date: "Jun 2019"),
  degree: "Bachelor of Informatics",

  // Uncomment the line below if you want edu formatting to be consistent with everything else
  consistent: true,
)

== Qualifications

=== Certifications
#certificates(
  name: "AWS Certified Solutions Architect - Associate",
  issuer: "Amazon Web Services",
  date: "Dec 2025",
)

#certificates(
  name: "AWS Certified Developer - Associate",
  issuer: "Amazon Web Services",
  date: "2022",
)

=== Technical Skills

- *AWS:* CDK, S3, EC2, ECS, EKS, Lambda, CloudFront, Transfer Family, IAM, VPC, CloudWatch
- *Programming & Apps:* TypeScript, Python, Node.js (React, Next.js)
- *Delivery & Data:* GitHub Actions, Docker, Kubernetes, DynamoDB, PostgreSQL

=== Language Proficiency
*English:* Professional fluency (PTE Academic, Sep 2025 · Overall score: 90)

*Norwegian:* Native
