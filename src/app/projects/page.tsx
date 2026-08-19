import { getAllProjects } from "@/lib/content";
import ProjectsIndex from "@/components/projects-index";

export default async function AllProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsIndex projects={projects} />;
}