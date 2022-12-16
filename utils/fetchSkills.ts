import { Skill } from "../types";

export default async function fetchSkills(): Promise<Array<Skill>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const data = await res.json();

  const skills: Array<Skill> = data.skills;
  return skills;
}