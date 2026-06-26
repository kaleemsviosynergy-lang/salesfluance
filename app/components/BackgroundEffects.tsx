export default function BackgroundEffects() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/30 blur-[140px]" />

      {/* Top Right Glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-[140px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-orange-200/20 blur-[140px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
  backgroundImage: `
    linear-gradient(#0f172a 1px, transparent 1px),
    linear-gradient(90deg, #0f172a 1px, transparent 1px)
  `,
  backgroundSize: "50px 50px",
}}
      />
    </>
  );
}