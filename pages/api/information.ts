import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../types";

const query = groq`*[_type == "pageInfo"]`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await sanityClient.fetch(query);
  const pageInfo: PageInfo = data[0];
  res.status(200).json({ pageInfo });
}
