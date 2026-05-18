import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  
  await fetch('https://waliex3.app.n8n.cloud/webhook/elmueiz-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  return NextResponse.json({ success: true })
}
