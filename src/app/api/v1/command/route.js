import { NextResponse } from 'next/server';

export async function POST(req) {
  const { command } = await req.json();

  try {
    const res = await fetch(process.env.AMQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(process.env.AMQ_USERNAME + ':' + process.env.AMQ_PASSWORD),
      },
      body: `body=${command}`,
    });

    console.log(command, res.statusText);

    return NextResponse.json(
      {
        success: true,
        message: `received ${command}`,
      },
      { status: res.status }
    );
  } catch (error) {
    console.log('ERROR', error);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 400 }
    );
  }
}
