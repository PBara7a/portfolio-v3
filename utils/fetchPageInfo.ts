import { PageInfo } from "../types";

export default async function fetchPageInfo(): Promise<Array<PageInfo>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/information`);
  const data = await res.json();

  const pageInfo: Array<PageInfo> = data.pageInfo;
  return pageInfo;
}