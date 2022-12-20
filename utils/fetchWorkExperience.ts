import { WorkExperience } from "../types";

export default async function fetchSkills(): Promise<Array<WorkExperience>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workExperiences`);
  const data = await res.json();

  const workExperiences: Array<WorkExperience> = data.workExperiences;
  return workExperiences;
}
