import androidStudio from "../assets/app/android_studio.png";
import androidStudioIcon from "../assets/techstack/androidstudio.svg";
import digitalOceanIcon from "../assets/techstack/digitalocean.svg";
import firebaseIcon from "../assets/techstack/firebase.svg";
import goIcon from "../assets/techstack/go.svg";
import jetpackComposeIcon from "../assets/techstack/jetpackcompose.svg";
import kotlinIcon from "../assets/techstack/kotlin.svg";
import solanaIcon from "../assets/techstack/solana.svg";

function Technology() {
  return (
    <section
      className="relative overflow-hidden bg-white z-10 -mt-16 pt-16"
      id="technology"
    >
      {/* Compact watercolor-style overlay positioned between hero and tech stack */}
      <div className="absolute -top-8 left-0 w-full h-32 pointer-events-none z-0">
        {/* Base watercolor wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-base-100/70" />

        {/* Color bleeding effects - like paint drops in water */}
        <div
          className="absolute top-0 left-1/4 w-48 h-20 rounded-full blur-2xl transform -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-2 right-1/3 w-40 h-16 rounded-full blur-xl transform translate-x-1/3"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-4 left-1/2 w-32 h-12 rounded-full blur-lg transform -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
          }}
        />

        {/* Organic flowing shapes */}
        <div className="absolute top-1 left-0 w-full h-16 bg-gradient-to-r from-white/6 via-transparent to-white/6 blur-md" />
        <div className="absolute top-6 left-0 w-full h-12 bg-gradient-to-r from-transparent via-white/4 to-transparent blur-sm" />

        {/* Final blending layer */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-base-100/90 via-base-100/50 to-transparent" />
      </div>{" "}
      {/* Centered like Hero */}
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col items-center justify-center gap-10">
          {/* Smaller rectangular image wrapper with enhanced floating effect */}
          <div className="relative w-full max-w-[900px]">
            {/* Main floating container */}
            <div className="relative w-full transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out">
              {/* Multiple shadow layers for depth */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -inset-3 bg-gradient-to-br from-base-300/40 to-base-200/40 rounded-2xl blur-lg" />

              {/* Image container with floating effect */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src={androidStudio}
                  alt="Android Studio"
                  className="w-full h-auto object-contain object-center filter-none"
                  style={{ imageRendering: "crisp-edges" }}
                  draggable="false"
                />
                {/* Enhanced floating effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Icons row under the image */}
          <div className="w-full mt-4 overflow-x-auto">
            <div className="mx-auto flex w-max items-center gap-10 px-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={kotlinIcon}
                  alt="Kotlin"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={jetpackComposeIcon}
                  alt="Jetpack Compose"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={androidStudioIcon}
                  alt="Android Studio"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={firebaseIcon}
                  alt="Firebase"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={goIcon}
                  alt="Go"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={digitalOceanIcon}
                  alt="DigitalOcean"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="h-12 w-12 object-contain"
                  src={solanaIcon}
                  alt="Solana"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
