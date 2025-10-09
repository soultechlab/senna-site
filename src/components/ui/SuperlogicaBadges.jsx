export default function SuperlogicaBadges({ className = "" }) {
  const containerClassName = ["sl-container", className].filter(Boolean).join(" ");

  return (
    <div id="slContainer" className={containerClassName}>
      <div className="sl-badges">
        <a
          href="https://play.google.com/store/apps/details?id=com.condor.superlogica&hl=pt_BR&utm_campaign=medium-&utm_medium=novidades-sistema&utm_source=chegou-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://senaadm.superlogica.net/images/areacondomino/btn-googleplay.png"
            alt="Disponível no Google Play"
            width="200"
            height="77"
            loading="lazy"
          />
        </a>
      </div>

      <div className="sl-badges">
        <a
          href="https://apps.apple.com/br/app/area-do-condomino/id1160849001?utm_campaign=medium-&utm_medium=novidades-sistema&utm_source=chegou-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://senaadm.superlogica.net/images/areacondomino/btn-appstore.png"
            alt="Disponível na App Store"
            width="200"
            height="78"
            loading="lazy"
            style={{ boxSizing: "border-box" }}
          />
        </a>
      </div>
    </div>
  );
}
