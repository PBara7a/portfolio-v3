import { createClient, groq } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
  apiVersion: "2022-11-16",
  useCdn: typeof document !== "undefined", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
};

export const sanityClient = createClient(config);

export const urlFor = (source: string) =>
  createImageUrlBuilder(sanityClient).image(source);
