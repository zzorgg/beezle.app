import fei8ht from "../assets/team/f-ei8ht.png";
import towk from "../assets/team/towk.jpeg";

function Badge() {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="avatar avatar-online">
          <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src={fei8ht} alt="feight avatar" />
          </div>
        </div>
        <span className="badge badge-neutral badge-outline">f-ei8ht</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="avatar avatar-online">
          <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src={towk} alt="towk avatar" />
          </div>
        </div>
        <span className="badge badge-neutral badge-outline">towk</span>
      </div>
    </div>
  );
}

export default Badge;
