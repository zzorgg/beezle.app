import markRotating from "../assets/powered/mark-rotating.svg";
import reactLogo from "../assets/powered/react.svg";
import typescriptLogo from "../assets/powered/typescript.svg";
import viteLogo from "../assets/powered/vite.svg";
import tailwindcssLogo from "../assets/powered/tailwindcss.svg";

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
            src={markRotating}
            className="w-10 h-10 object-contain"
            alt="Open menu"
          />
        </div>

        {/* buttons that show up when FAB is open */}
        <button className="btn btn-lg btn-circle">
          <img
            src={reactLogo}
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src={typescriptLogo}
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src={viteLogo}
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
        <button className="btn btn-lg btn-circle">
          <img
            src={tailwindcssLogo}
            className="w-7 h-7 object-contain"
            alt="Another Icon"
          />
        </button>
      </div>
    </>
  );
}

export default Powered;
