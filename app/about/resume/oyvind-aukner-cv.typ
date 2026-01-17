#import "@preview/basic-resume:0.2.9": *


#set text(font: "New Computer Modern", size: 11pt)
#set page(paper: "a4", margin: 0.5in)
// #show heading: set text(fill: rgb("#3774b3"))
#show heading: set text(fill: rgb("#0069a8"))
// #show heading: set text(fill: rgb("#00a6f4"))

#show heading.where(level: 1): set text(size: 24pt)

#show heading.where(level: 2): it => {
  it
  v(-0.7em) // vertical space
  line(length: 100%, stroke: 1pt + black)
  v(0.5em) // space after the line
}

= Øyvind Aukner

Senior Cloud / Platform Engineer (AWS)

+47 950 96 996 ·
oyvind.auk\@gmail.com ·
#underline(text(fill: rgb("#00a6f4"), link("https://oyvindaukner.com/about")[oyvindaukner.com]))
// #text(fill: rgb("#6a7282"))[_Best times for calls: 7:00-9:00 AM CET (4:00-6:00 PM AEST)_]

== Work Experience

#work(
  // title: "Senior Developer",
  title: "Senior Cloud Engineer",
  // location: "Oslo, Norway",
  company: "Fremtind Forsikring AS",
  dates: dates-helper(start-date: "Aug 2024", end-date: "Present"),
)
// - Managed and developed AWS services as part of the AWS Platform Team to support organization-wide cloud infrastructure
// - Designed, launched, and managed image mirroring solutions in AWS EKS for container orchestration
- Leveraged Infrastructure as Code (IaC) with AWS CDK to streamline deployments and automation
- Created and maintained company-wide SFTP service using AWS Transfer Family for secure file transfers
- Ensured scalable, efficient, and secure cloud solutions across multiple teams and business units
- Collaborated with cross-functional teams to implement best practices for cloud architecture

#work(
  title: "Software Engineer",
  // location: "Oslo, Norway",
  company: "Cargotron AS",
  dates: dates-helper(start-date: "Jan 2024", end-date: "Aug 2024"),
)
- Salvaged and launched TDoc timekeeping system after previous consultancy bankruptcy, ensuring Norwegian Road Administration compliance
- Corrected two React codebases while collaborating on C\# backend development and API communication
// - Collaborated on backend development in C\#, refining RESTful JSON-based client-server communication to enhance system reliability

#work(
  title: "Senior Fullstack Developer",
  // location: "Oslo, Norway",
  company: "Fleks AS",
  dates: dates-helper(start-date: "Aug 2022", end-date: "Dec 2023"),
)
- Worked on a new store with grid view and product page using modern web technologies
- Implemented functionality for adding charging chips to vehicles in the operations app
- Worked on AWS Lambda functions for handling of new insurance offering
- Made branded dashboards for Oslo office using React and cloud infrastructure

#work(
  title: "Fullstack Developer",
  // location: "Oslo, Norway",
  company: "Capra Consulting AS",
  dates: dates-helper(start-date: "Jan 2020", end-date: "Aug 2022"),
)
- Implemented App charging microservice at APCOA Norway
- Worked with Yara to implement dashboard and visualization tools for IoT data through AWS
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
- Covered computer science fundamentals, software development, algorithms, and system design

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
#grid(
  columns: (1fr, 1fr),
  gutter: 1em,
  [
    - *Languages:* TypeScript, Python
    - *Cloud:* AWS, CDK, IaC
    - *Frontend:* React, Next.js, TailwindCSS
  ],
  [
    - *Backend:* Node.js, RESTful APIs
    - *Databases:* DynamoDB, PostgreSQL
    - *Tools:* Git, Github Actions, Docker, Kubernetes// NGINX
  ],
)

=== Language Proficiency
*English:* PTE Academic Sep 2025 · Overall score: 90 (90 - 90 - 88 - 81)

*Norwegian:* Native
