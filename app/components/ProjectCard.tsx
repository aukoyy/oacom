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

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="p-4 md:p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
			{project.img_url && (
				<Image
					src={project.img_url}
					alt={project.title}
					width={800}
					height={224}
					className="w-full h-48 md:h-56 object-cover mb-4 rounded"
				/>
			)}
			<h2 className="font-bold text-xl md:text-2xl mb-3 wrap-break-word leading-tight">
				{project.title}
			</h2>
			<p className="text-gray-600 text-base md:text-lg leading-relaxed wrap-break-word mb-4">
				{project.description}
			</p>
			<div className="flex flex-wrap gap-2 mt-4">
				{project.techStack.map(tech => (
					<span 
						key={tech} 
						className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm md:text-base"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}

export type { Project };
