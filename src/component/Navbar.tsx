import { useEffect, useState } from "react";
import logoImage from "../assets/logo/logo.png";
import githubIcon from "../assets/brand/github-mark-white.svg";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={
          "navbar sticky top-0 z-50 min-h-[5rem] transition-none" +
          (scrolled
            ? "bg-base-100/70 backdrop-blur-md shadow-sm"
            : "bg-base-100 shadow-none")
        }
      >
        <div className="navbar-start ">
          <a
            className="flex items-center gap-2 text-xl p-0 ml-4"
            href="/"
            tabIndex={-1}
            style={{ background: "none", boxShadow: "none" }}
          >
            <img
              src={logoImage}
              alt="Beezle Logo"
              className="w-12 h-12 rounded-4xl"
            />
            <span className="font-bold tracking-tight text-2xl">BEEZLE</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 transition-none">
            <li>
              <a href="#hero" className="transition-none">
                Hero
              </a>
            </li>
            <li>
              <a href="#technology" className="transition-none">
                Technology
              </a>
            </li>
            <li>
              <a href="#team" className="transition-none">
                Team
              </a>
            </li>
            <li>
              <a href="/steps" className="transition-none">
                Steps
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 pr-4">
          <a
            href="https://github.com/zzorgg/beezle.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
            Star on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
