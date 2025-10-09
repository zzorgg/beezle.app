import orgLogo from "../assets/logo/org.png";

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
              src={orgLogo}
              alt="zzorgg logo"
              className="w-18 h-18 rounded-xl ring-1 ring-base-300/40"
            />
            <span className="text-3xl font-extrabold tracking-tight">
              zzorgg
            </span>
          </a>
          <div className="text-sm opacity-80">
            <p>© {year} zzorgg. All rights reserved.</p>
            <p>
              zzorgg holds beezle.app. Currently built by{" "}
              <span className="underline decoration-wavy decoration-primary">
                Saif Ali Khan
              </span>{" "}
              and{" "}
              <span className="underline decoration-wavy decoration-[#42EF83]">
                Mohammad Shoaib Khan
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
