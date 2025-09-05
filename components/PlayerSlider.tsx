// components/PlayerSlider.tsx
"use client";

type Props = {
  value: number;
  max: number;
  onScrubStart: () => void;
  onScrubMove: (v: number) => void;
  onScrubEnd: () => void;
  ariaLabel?: string;
};

export default function PlayerSlider({
  value,
  max,
  onScrubStart,
  onScrubMove,
  onScrubEnd,
  ariaLabel = "Seek",
}: Props) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <input
      type="range"
      min={0}
      max={max}
      step={0.01}
      value={value}
      onPointerDown={onScrubStart}
      onPointerUp={onScrubEnd}
      onChange={(e) => onScrubMove(Number(e.target.value))}
      onInput={(e) => onScrubMove(Number((e.target as HTMLInputElement).value))}
      style={{
        background: `linear-gradient(to right,
          rgba(255,255,255,0.95) 0%,
          rgba(255,255,255,0.95) ${pct}%,
          rgba(255,255,255,0.3) ${pct}%,
          rgba(255,255,255,0.3) 100%)`,
      }}
      className="
        w-full appearance-none bg-transparent

        [&::-webkit-slider-runnable-track]:h-1
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-transparent

        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:-mt-1.5

        [&::-moz-range-track]:h-1
        [&::-moz-range-track]:rounded-full
        [&::-moz-range-track]:bg-transparent
        [&::-moz-range-progress]:h-1
        [&::-moz-range-progress]:rounded-full
        [&::-moz-range-progress]:bg-white/90
      "
      aria-label={ariaLabel}
    />
  );
}
