// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'GET request received' });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: 'POST request received', data });
}
