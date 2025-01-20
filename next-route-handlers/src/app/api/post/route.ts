import { NextRequest } from "next/server";
import { posts } from "./data";

// used for caching (works only in GET)
export const dynamic = "forced-static"
export const revalidate = 10 // revalidate after every 10sec


// export async function GET(req: Request) {
//   return Response.json(posts);
// }

export async function GET(req:NextRequest){
    const searchParams = req.nextUrl.searchParams

    let query = searchParams.get('content')
    query = query || ''

    const resp = posts.filter((p)=>p.content.includes(query))

    return Response.json(resp)
    
}

export async function POST(req: Request) {
  const { content } = await req.json();
  const newPost = {
    id: posts.length + 1,
    content,
  };
  posts.push(newPost);
  return Response.json({
    message: "created",
    post: newPost,
  });
}
