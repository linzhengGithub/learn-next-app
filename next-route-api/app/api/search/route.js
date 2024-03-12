import { NextResponse } from 'next/server'
 
export function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') // query
  return NextResponse.json({ data: query })
}
