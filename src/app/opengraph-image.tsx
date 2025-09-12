import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sham Studio - Webdesign & Entwicklung in Hannover'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#1e293b',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Sham Studio
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#3b82f6',
              margin: '0 0 30px 0',
              fontWeight: '600',
            }}
          >
            Webdesign & Entwicklung
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#64748b',
              margin: '0',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Professionelle Webdesign-Lösungen für Portfolios, Landing Pages und Unternehmen in Hannover
          </p>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '18px',
              color: '#94a3b8',
            }}
          >
            sham.studio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
