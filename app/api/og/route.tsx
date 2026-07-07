import { ImageResponse } from 'next/og'
import siteMetadata from '@/data/siteMetadata'

export const runtime = 'edge'

const OG_WIDTH = 1200
const OG_HEIGHT = 630

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const titleParam = searchParams.get('title')
  const title = (titleParam || siteMetadata.title).slice(0, 140)
  const logoUrl = `${siteMetadata.siteUrl}${process.env.BASE_PATH || ''}/static/images/logo.png`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '56px',
        background:
          'radial-gradient(circle at 20% 10%, #f5f5f5 0%, #f0f4f8 30%, #e7eef6 60%, #dde7f3 100%)',
        color: '#0f172a',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={logoUrl} alt="Ninefold Digital logo" width={72} height={72} />
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em' }}>
          Ninefold Digital
        </div>
      </div>

      <div
        style={{
          fontSize: 64,
          lineHeight: 1.12,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {title}
      </div>
    </div>,
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
    }
  )
}
