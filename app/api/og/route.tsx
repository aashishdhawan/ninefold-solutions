import { ImageResponse } from 'next/og'
import siteMetadata from '@/data/siteMetadata'

export const runtime = 'edge'

const OG_WIDTH = 1200
const OG_HEIGHT = 630

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const titleParam = searchParams.get('title')
  const title = (titleParam || siteMetadata.title).slice(0, 140)
  const titleLength = title.length
  const titleFontSize = titleLength > 120 ? 54 : titleLength > 95 ? 62 : titleLength > 72 ? 70 : 82
  const titleLineHeight = titleLength > 95 ? 1.12 : titleLength > 72 ? 1.08 : 1.04
  const logoUrl = new URL(
    `${process.env.BASE_PATH || ''}/static/images/ninefold-logo-full.png`,
    request.url
  ).toString()

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '68px',
        background: 'linear-gradient(160deg, #f8fafc 0%, #edf2f7 44%, #e3ebf4 100%)',
        color: '#0f172a',
        fontFamily: 'InterVariable, Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          minHeight: '96px',
        }}
      >
        <img src={logoUrl} alt="Ninefold Digital logo" height={84} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          marginTop: '44px',
          fontSize: titleFontSize,
          lineHeight: titleLineHeight,
          fontWeight: 950,
          fontVariationSettings: "'wght' 950",
          fontFamily: 'InterVariable, Inter, ui-sans-serif, system-ui, sans-serif',
          letterSpacing: '-0.05em',
          maxWidth: '100%',
          overflow: 'hidden',
          textShadow:
            '0 1px 0 rgba(15, 23, 42, 0.3), 0 0 1px rgba(15, 23, 42, 0.24), 0 2px 3px rgba(15, 23, 42, 0.14)',
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
