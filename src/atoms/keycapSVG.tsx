type Props = {
  size?: number;
  className?: string;
  strokeColor?: string;
  topStrokeColor?: string;
  shadowStrokeColor?: string;
};

const KeycapA_VolDn_Outline = ({
  size = 200,
  className,
  strokeColor = "#333",
  topStrokeColor = "#555",
  shadowStrokeColor = "rgba(0,0,0,0.2)",
}: Props) => {
  // サイズに基づいて、他の比率を計算
  const width = size;
  const height = size * 1.1; // 少し縦長にする

  // SVGのビューボックス
  const viewBox = `0 0 1000 1100`;

  // キーキャップの形状と立体感を定義するパラメータ
  const topSize = 750; // 上面のサイズ
  const bottomSize = 900; // 底面のサイズ
  const capHeight = 1000; // キーキャップ全体の高さ
  const cornerRadius = 50; // 角の丸み

  const shadowOffset = 40; // 影のオフセット
  const sideWidth = (bottomSize - topSize) / 2; // 側面の幅
  const baseOffset = (1000 - bottomSize) / 2; // 底面のオフセット

  // 線の太さ
  const mainStrokeWidth = 12;
  const topStrokeWidth = 8;
  const shadowStrokeWidth = 8;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill="none" // 全体を塗りつぶさない設定
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 影のアウトライン (最も薄い色) */}
      <rect
        x={baseOffset + shadowOffset}
        y={baseOffset + shadowOffset}
        width={bottomSize}
        height={bottomSize}
        rx={cornerRadius}
        stroke={shadowStrokeColor}
        strokeWidth={shadowStrokeWidth}
      />

      {/* キーキャップ本体のアウトライン（底面・側面） (メインの色) */}
      <rect
        x={baseOffset}
        y={baseOffset}
        width={bottomSize}
        height={capHeight}
        rx={cornerRadius}
        stroke={strokeColor}
        strokeWidth={mainStrokeWidth}
      />

      {/* キーキャップ上面（傾斜）のアウトライン (少し薄い色で奥行きを表現) */}
      <path
        d={`M${baseOffset + sideWidth},${baseOffset} 
           A${cornerRadius},${cornerRadius} 0 0 1 ${1000 - baseOffset - sideWidth},${baseOffset}
           L${1000 - baseOffset - sideWidth},${baseOffset + topSize}
           A${cornerRadius},${cornerRadius} 0 0 1 ${baseOffset + sideWidth},${baseOffset + topSize}
           Z`}
        stroke={topStrokeColor}
        strokeWidth={topStrokeWidth}
      />

      {/* 文字 "A" (塗りつぶしのまま、線を際立たせる) */}
      <text
        x="500"
        y="420"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="160"
        fontWeight="500"
        fill={strokeColor} // 文字の色
        fontFamily="sans-serif"
      >
        A
      </text>

      {/* 文字 "vol dn" (塗りつぶしのまま、線を際立たせる) */}
      <text
        x="500"
        y="750"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="80"
        fontWeight="400"
        fill={topStrokeColor} // 少し薄い文字の色
        fontFamily="sans-serif"
      >
        vol dn
      </text>
    </svg>
  );
};

export default KeycapA_VolDn_Outline;
