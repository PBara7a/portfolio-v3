import { Social } from "../types";

export default async function fetchSocials(): Promise<Array<Social>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
  const data = await res.json();

  const socials: Array<Social> = data.socials;
  return socials;
}