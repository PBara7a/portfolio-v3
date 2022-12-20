import { Project } from "../types";

export default async function fetchSkills(): Promise<Array<Project>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const data = await res.json();

  const projects: Array<Project> = data.projects;
  return projects;
}
