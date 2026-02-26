import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BOOM Fitness Studio - Narvarte, CDMX';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

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
          backgroundColor: '#0A0A0A',
          backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              color: '#0046FF',
              letterSpacing: '-0.05em',
              marginBottom: 20,
            }}
          >
            BOOM
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#F2F0EB',
              opacity: 0.8,
              marginBottom: 10,
            }}
          >
            Not here to blend. In here to BOOM.
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#E8C84A',
              letterSpacing: '0.2em',
            }}
          >
            NARVARTE · CDMX · PRÓXIMAMENTE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
