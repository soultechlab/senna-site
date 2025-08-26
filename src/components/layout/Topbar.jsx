export default function Topbar() {
  return (
    <div className="w-full text-xs sm:text-sm bg-black text-white/80 py-2 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <a className="hover:text-white" href="tel:+5521997627530">
            (21) 99762-7530
          </a>
          <a
            className="hover:text-white break-all sm:break-normal"
            href="mailto:comercial@sennacondominioseimoveis.com.br"
          >
            comercial@sennacondominioseimoveis.com.br
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="hover:text-white"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="hover:text-white"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
