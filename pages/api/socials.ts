import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../types";

const query = groq`*[_type == "social"]`;

type Data = {
  socials: Array<Social>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Array<Social> = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}