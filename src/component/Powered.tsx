function Powered() {
  return (
    <>
      <div className="fab">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-default"
        >
          <img
            src="/src/assets/powered/mark-rotating.svg"
            className="w-10 h-10 object-contain"
            alt="Open menu"
          />
        </div>

        {/* buttons that show up when FAB is open */}
        <button className="btn btn-lg btn-circle">
          <img
            src="/src/assets/powered/react.svg"
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src="/src/assets/powered/typescript.svg"
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src="/src/assets/powered/vite.svg"
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src="/src/assets/powered/tailwindcss.svg"
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
      </div>
    </>
  );
}

export default Powered;
