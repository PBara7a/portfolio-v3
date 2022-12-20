import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../types";

const query = groq`*[_type == "experience"]`;

type Data = {
  experience: Array<Experience>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experience: Array<Experience> = await sanityClient.fetch(query);

  res.status(200).json({ experience });
}
