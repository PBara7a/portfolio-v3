import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../types";

const query = groq`*[_type == "project"]`;

type Data = {
  projects: Array<Project>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const projects: Array<Project> = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
