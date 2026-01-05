interface WorkExperience {
  startMonthYear: string;
  excludeFromResume?: boolean;
  startDate: string;
  endDate: string;
  endMonthYear: string;
  roleTitle: string;
  company: string;
  description: string;
  achievements?: string[];
}

interface Education {
  startDate: string;
  endDate: string;
  startMonthYear: string;
  endMonthYear: string;
  degree: string;
  institution: string;
  description: string;
}

interface Certification {
  date: string;
  monthYear: string;
  title: string;
  issuer: string;
  link?: string;
}

export interface Resume {
  education?: Education[];
  workExperience?: WorkExperience[];
  certifications?: Certification[];
}



export const Resume: Resume = {
  workExperience: [
    {
      startDate: '2024-08-12',
      endDate: '2026-01-05',
      startMonthYear: 'Aug 2024',
      endMonthYear: 'now',
      roleTitle: 'Senior Developer',
      company: 'Fremtind Forsikring AS',
      description: 'Maintained and developed the core cloud platform as part of the AWS Platform Team.',
      achievements: [
        'Maintained and developed the core cloud platform as part of the AWS Platform Team.',
      ]
    },
    {
      startDate: '2024-01-01',
      endDate: '2024-08-09',
      startMonthYear: 'Jan 2024',
      endMonthYear: 'Aug 2024',
      roleTitle: 'Software Engineer',
      company: 'Cargotron AS',
      description: 'Tasked with salvaging and launching TDoc, a timekeeping system for commercial truck drivers compliant with Norwegian Road Administration requirements. Improved and corrected two React codebases, ensuring usability and functionality. Collaborated on backend development in C#, refining RESTful JSON-based client-server communication.',
      achievements: [
        'Salvaged and successfully launched TDoc, a timekeeping system for commercial truck drivers compliant with Norwegian Road Administration (Statens Vegvesen) requirements.',
        'Improved and corrected two React codebases, ensuring usability and functionality after previous development challenges.',
        'Collaborated on backend development in C#, refining RESTful JSON-based client-server communication to enhance system reliability.'
      ]
    },
    {
      startDate: '2022-08-15',
      endDate: '2023-12-22',
      startMonthYear: 'Aug 2022',
      endMonthYear: 'Dec 2023',
      roleTitle: 'Senior Fullstack Developer',
      company: 'Fleks AS',
      description: 'Worked on a new store with grid view and product page. Implemented functionality for adding charging chips to vehicles in the operations app. Worked on AWS Lambda functions for handling of new insurance offering. Made branded dashboards for Oslo office.'
    },
    {
      startDate: '2020-01-13',
      endDate: '2022-08-12',
      startMonthYear: 'Jan 2020',
      endMonthYear: 'Aug 2022',
      roleTitle: 'Fullstack Developer',
      company: 'Capra Consulting AS',
      description: 'Got AWS certified. Implemented App charging microservice at APCOA Norway. Worked with Yara to implement dashboard and visualisation tools for IoT data through AWS. Worked on logged-in user pages for Gjensidige.'
    },
    {
      startDate: '2018-06-26',
      endDate: '2019-12-13',
      startMonthYear: 'Jun 2018',
      endMonthYear: 'Dec 2019',
      roleTitle: 'Frontend Developer',
      company: 'Skillsets AS',
      description: 'Implemented the website, made MVPs and worked on front-end components.'
    },
    {
      startDate: '2013-01-01',
      endDate: '2015-12-31',
      startMonthYear: 'Jan 2013',
      endMonthYear: 'Dec 2015',
      roleTitle: 'Sergeant',
      company: 'Norwegian Army, Panserbataljonen (Armoured battalion)',
      description: 'Group leader for two mortar tanks in the battalion\'s mortar platoon.',
      excludeFromResume: true
    }
  ],
  certifications: [
    {
      date: '2025-12-01',
      monthYear: 'Dec 2025',
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/4598c12c-2bc3-49df-83f0-67f10c597f3d'
    },
    {
      date: '2022-01-01',
      monthYear: '2022',
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services'
    },
    {
      date: '2021-01-01',
      monthYear: '2021',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services'
    }
  ],
  education: [
    {
      startDate: '2016-08-01',
      endDate: '2019-06-01',
      startMonthYear: 'August 2016',
      endMonthYear: 'Jun 2019',
      degree: 'Bachelor in Informatics',
      institution: 'NTNU - Norwegian University of Science and Technology',
      description: 'Comprehensive program covering computer science fundamentals, software development, algorithms, and system design. Located in Trondheim, Norway.'
    }
  ],
}