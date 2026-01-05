import { Resume } from '../app/about/resume/resume';

let typstModule: any = null;

async function loadTypst() {
  if (!typstModule) {
    try {
      // Dynamic import to handle Next.js SSR
      const { $typst } = await import('@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs');
      typstModule = $typst;
    } catch (error) {
      console.error('Failed to load Typst module:', error);
      throw new Error('Failed to initialize PDF generator');
    }
  }
  return typstModule;
}

export async function generateResumePDF(resume: Resume): Promise<Uint8Array> {
  const typst = await loadTypst();
  const typstContent = generateTypstResume(resume);
  
  try {
    const pdfBytes = await typst.pdf({
      mainContent: typstContent,
    });
    
    if (!pdfBytes) {
      throw new Error('Failed to generate PDF: No bytes returned');
    }
    
    return pdfBytes;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

function generateTypstResume(resume: Resume): string {
  return `
#set page(margin: (x: 0.8in, y: 0.6in))
#set text(font: "Arial", size: 11pt)
#set par(leading: 0.65em)

// Header
#align(center)[
  #text(size: 24pt, weight: "bold")[Øyvind Aukner]
  #v(0.2em)
  #text(size: 12pt)[
    Email: oyvind.auk\@gmail.com | GitHub: github.com/aukoyy | Homepage: oyvindaukner.com
  ]
  #v(0.3em)
  #text(size: 12pt)[Osterhaus' gate 23, 0183 Oslo, Norway]
]

#v(0.5em)
#line(length: 100%, stroke: 1pt)
#v(0.3em)

${generateEducationSection(resume.education)}

${generateExperienceSection(resume.workExperience)}

${generateCertificationSection(resume.certifications)}

#v(0.3em)
// Skills Section
#text(size: 14pt, weight: "bold")[Developer Skills]
#v(0.2em)

#grid(
  columns: (1fr, 3fr),
  gutter: 1em,
  [*Frontend*], [HTML, CSS, TypeScript, React, TailwindCSS, Next.js, Figma],
  [*Backend*], [Node.js, Express, Python, SQL, PostgreSQL, JWT],
  [*Fullstack*], [REST, Postman, Git],
  [*DevOps*], [Amazon Web Services (AWS), Docker, Kubernetes, Linux, GitHub Actions],
  [*AWS*], [S3, EC2, Lambda, CDK, CloudFormation, RDS, DynamoDB, CloudWatch, VPC, IAM, Route53],
  [*Methodology*], [Agile, Scrum, Shape-Up, minimalism, Jira]
)
`;
}

function generateEducationSection(education?: Resume['education']): string {
  if (!education || education.length === 0) return '';
  
  return `
// Education Section
#text(size: 14pt, weight: "bold")[Education]
#v(0.2em)

${education.map(edu => `
#grid(
  columns: (3fr, 1fr),
  gutter: 1em,
  [
    #text(weight: "bold")[${edu.degree}] \\
    ${edu.institution} \\
    ${edu.description}
  ],
  [
    #align(right)[${edu.startMonthYear} - ${edu.endMonthYear}]
  ]
)
#v(0.3em)
`).join('')}`;
}

function generateExperienceSection(workExperience?: Resume['workExperience']): string {
  if (!workExperience || workExperience.length === 0) return '';
  
  const filteredExperience = workExperience.filter(exp => !exp.excludeFromResume);
  
  return `
// Work Experience Section
#text(size: 14pt, weight: "bold")[Work Experience]
#v(0.2em)

${filteredExperience.map(exp => `
#grid(
  columns: (3fr, 1fr),
  gutter: 1em,
  [
    #text(weight: "bold")[${exp.roleTitle}] \\
    #text(style: "italic")[${exp.company}] \\
    ${exp.description}
    ${exp.achievements ? `
    
    #list(
      ${exp.achievements.map(achievement => `[${achievement}]`).join(',\n      ')}
    )` : ''}
  ],
  [
    #align(right)[${exp.startMonthYear} - ${exp.endMonthYear}]
  ]
)
#v(0.4em)
`).join('')}`;
}

function generateCertificationSection(certifications?: Resume['certifications']): string {
  if (!certifications || certifications.length === 0) return '';
  
  return `
// Certifications Section
#text(size: 14pt, weight: "bold")[Certifications]
#v(0.2em)

${certifications.map(cert => `
#grid(
  columns: (3fr, 1fr),
  gutter: 1em,
  [
    #text(weight: "bold")[${cert.title}] \\
    ${cert.issuer}
  ],
  [
    #align(right)[${cert.monthYear}]
  ]
)
#v(0.2em)
`).join('')}`;
}

export function downloadPDF(pdfBytes: Uint8Array, filename: string = 'resume.pdf') {
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}