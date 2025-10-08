function Steps() {
  return (
    <section
      className="min-h-[60vh] flex items-center justify-center px-4"
      id="steps"
    >
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="card bg-base-100/60 backdrop-blur-xl border border-base-300/40 shadow-xl">
              <div className="card-body items-center">
                <div className="avatar placeholder mb-2">
                  <div className="bg-warning/20 text-warning-content w-16 rounded-full ring-1 ring-warning/30">
                    <img src="/src/assets/logo/maintenance.png" alt="" />
                  </div>
                </div>
                <h1 className="card-title text-3xl">Page under construction</h1>
                <p className="opacity-80">
                  This section is still in development. Please check back soon,
                  we're building something great.
                </p>
                <div className="card-actions mt-2">
                  <a href="/" className="btn btn-primary">
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
