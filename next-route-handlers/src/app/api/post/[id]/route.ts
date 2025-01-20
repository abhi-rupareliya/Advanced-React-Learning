import { cookies, headers } from "next/headers";
import { posts } from "../data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  const headersList = await headers();
  const authorization = headersList.get("Authorization");

  const cookieStore = await cookies()

  console.log("theme",cookieStore.get("theme"))
  cookieStore.set("theme","light");

  console.log("authorization", authorization);
  const post = posts.filter((post) => +id === post.id);

  return Response.json(post[0]);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const body = await req.json();
  const { content } = body;
  const idx = posts.findIndex((post) => +id === post.id);
  posts[idx].content = content;
  return Response.json(posts[idx]);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const idx = posts.findIndex((post) => +id === post.id);
  posts.splice(idx, 1);
  return Response.json({
    message: "Deleted",
  });
}
