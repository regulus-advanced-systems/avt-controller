import { NextResponse } from 'next/server';

export async function POST(req) {
  const { command } = await req.json();

  return NextResponse.json({
    success: true,
    message: `received ${command}`,
  });
}
