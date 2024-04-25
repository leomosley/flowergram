import { ImageResponse } from 'next/og';

export const size = {
  width: 18,
  height: 18,
};

export default function Icon() {
  return new ImageResponse(
    (<div>🌺</div>),
    {...size}
  );
}
