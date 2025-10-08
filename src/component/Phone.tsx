function Phone() {
  return (
    <div className="mockup-phone w-72 sm:w-80 md:w-88 lg:w-96">
      <div className="mockup-phone-display ">
        <video
          src="/src/assets/app/app.mp4"
          loop
          autoPlay
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
}

export default Phone;
