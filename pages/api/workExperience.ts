import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { WorkExperience } from "../../types";

const query = groq`*[_type == "experience"]`;

type Data = {
  experience: Array<WorkExperience>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experience: Array<WorkExperience> = await sanityClient.fetch(query);

  res.status(200).json({ experience });
}
