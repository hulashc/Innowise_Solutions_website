export default function CtaBackground() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background: `
          linear-gradient(135deg, #4A236F 0%, #5B2D8A 30%, #7B4DA8 60%, #9333EA 100%)
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 50%, rgba(168,85,247,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(74,35,111,0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 25%, rgba(56,189,248,0.2) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
