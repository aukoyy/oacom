import Link from "next/link";
import projectsData from "./projects.json";
import Image from "next/image";

interface Project {
	title: string;
	startMonth: string;
	endMonth?: string;
	techStack: string[];
	description: string;
	organization?: string;
	img_url?: string;
}

export default function ProjectsPage() {
	const projects: Project[] = projectsData;

	return (
		<div className="my-8 md:my-12 flex flex-col items-center px-4 md:px-8">
			<main className="w-full lg:max-w-2xl">
				<Link href="/" className="inline-block cursor-pointer py-3 px-4 bg-gray-200 rounded text-base md:text-lg">Back</Link>
				<h1 className="text-4xl md:text-5xl mt-8 wrap-break-word font-bold">Projects</h1>
				<div className="mt-8 space-y-6 md:space-y-8" data-testid="projects-container">
					{projects.length === 0 && <div>No projects found.</div>}
					{projects.map(project => (
						<div key={project.title} className="project">
							<div className="p-4 md:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
								{project.img_url && (
									<Image
										src={project.img_url}
										alt={project.title}
										width={800}
										height={224}
										className="w-full h-48 md:h-56 object-cover mb-4 rounded"
									/>
								)}
								<div className="font-bold text-xl md:text-2xl mb-3 wrap-break-word leading-tight">
									{project.title}
								</div>
								<div className="text-gray-600 text-base md:text-lg leading-relaxed wrap-break-word mb-4">
									{project.description}
								</div>
								<div className="flex flex-wrap gap-2 mt-4">
									{project.techStack.map(tech => (
										<span key={tech} className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm md:text-base">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

