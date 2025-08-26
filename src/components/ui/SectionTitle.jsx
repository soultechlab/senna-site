export default function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-4xl mx-auto content-spacing">
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold uppercase mb-4">
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}
