import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({
    message: 'hello GET',
  });
}

export async function POST(request) {
  return NextResponse.json({
    message: 'hello POST',
  });
}
