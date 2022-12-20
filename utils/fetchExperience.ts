import { Experience } from "../types";

export default async function fetchSkills(): Promise<Array<Experience>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`);
  const data = await res.json();

  const workExperiences: Array<Experience> = data.experience;
  return workExperiences;
}
