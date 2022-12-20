import { WorkExperience } from "../types";

export default async function fetchSkills(): Promise<Array<WorkExperience>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workExperience`);
  const data = await res.json();

  const workExperiences: Array<WorkExperience> = data.experience;
  return workExperiences;
}
