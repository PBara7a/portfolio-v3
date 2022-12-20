import { PageInfo } from "../types";

export default async function fetchPageInfo(): Promise<PageInfo> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/information`);
  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
}
