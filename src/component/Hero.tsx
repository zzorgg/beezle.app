import Phone from "./Phone";

type Pattern = "grid" | "dots";

/**
 * Hero section with decorative background pattern limited to this section.
 * Use the `pattern` prop to switch between "grid" and "dots". Mask is on by default.
 */
function Hero({
  pattern = "grid",
  withMask = false,
}: {
  pattern?: Pattern;
  withMask?: boolean;
}) {
  const baseOverlay =
    "absolute -z-10 inset-0 h-full w-full pointer-events-none";
  const mask = withMask
    ? "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"
    : "";

  // Make the grid and dots boxes larger
  const gridBg =
    "bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:36px_36px]";
  const dotsBg =
    "bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:18px_18px]";

  return (
    <>
      <section className="relative" id="hero">
        {/* Background pattern (only in Hero) */}
        <div
          aria-hidden="true"
          className={[
            baseOverlay,
            pattern === "grid" ? gridBg : dotsBg,
            mask,
            "opacity-40", // Lower opacity for subtler background
          ]
            .filter(Boolean)
            .join(" ")}
        />

        <div className="relative hero min-h-screen bg-transparent">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Phone />
            <div>
              <h1 className="text-5xl font-bold">
                An app to prove you're not{" "}
                <span className="relative inline-block bg-[#42EF83] px-2 py-1 rounded rotate-2">
                  dumb
                </span>
                .
              </h1>
              <p className="py-6">
                Finally, a way to truly show off your skills. Challenge your
                opponents in math and CS, outsmart them with ease, and earn the
                respect you've always deserved.
              </p>
              <button className="badge badge-outline badge-primary">
                Coming soon
              </button>{" "}
              <button className="badge badge-outline badge-neutral">
                The app is currently in development. Stay tuned!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
