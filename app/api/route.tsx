import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
  return NextResponse.json([
    {
      id: 1,
      icon: 'favorite',
      path: 'https://youtube.com/YauhenKavalchuk',
    },
    {
      id: 2,
      icon: 'translate',
      path: 'https://instagram.com/YauhenKavalchuk',
    },
    {
      id: 3,
      icon: 'raven',
      path: 'https://linkedin.com/in/YauhenKavalchuk',
    },
    {
      id: 4,
      icon: 'anchor',
      path: 'https://vk.com/YauhenKavalchuk',
    },
    {
      id: 5,
      icon: 'phone_enabled',
      path: 'https://twitter.com/YauhenKavalchuk',
    },
  ])
}

// export async function POST(request: Request) {
//   const res = await request.json()
//   return Response.json({ res })
// }