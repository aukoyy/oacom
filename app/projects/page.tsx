import projectsData from "./projects.json";
import ProjectCard, { type Project } from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = projectsData as Project[];

  return (
    <div className="flex flex-col items-center px-4 my-8 md:my-30 md:px-8">
      <main className="w-full lg:max-w-2xl">
        <div className="space-y-6 md:space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
          }
        </div>
      </main>
    </div>
  );
}