/** @jsxImportSource https://esm.sh/react */
import React from 'https://esm.sh/react@18.2.0'
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')
  const fontDataDisplay = await fontDisplay
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'start',
          fontSize: 128,
          background: '#94cbb8',
          color: '#265494'
          fontFamily: 'Smithee',
        }}
      >
        { title }
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Smithee',
          data: fontDataDisplay,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}