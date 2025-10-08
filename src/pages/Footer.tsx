function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-base-content border-t-2">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <a
            href="https://github.com/zzorgg"
            className="inline-flex items-center gap-3 justify-center md:justify-start"
            aria-label="zzorggg home"
          >
            <img
              src="/src/assets/logo/org.png"
              alt="zzorgg logo"
              className="w-18 h-18 rounded-xl ring-1 ring-base-300/40"
            />
            <span className="text-3xl font-extrabold tracking-tight">
              zzorgg
            </span>
          </a>
          <div className="text-sm opacity-80">
            <p>© {year} zzorggg. All rights reserved.</p>
            <p>
              zzorggg holds beezle.app. Currently built by Saif Ali Khan and
              Mohammad Shoaib Khan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
