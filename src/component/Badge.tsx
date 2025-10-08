function Badge() {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="avatar avatar-online">
          <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="/src/assets/team/f-ei8ht.png" alt="feight avatar" />
          </div>
        </div>
        <span className="badge badge-neutral badge-outline">f-ei8ht</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="avatar avatar-online">
          <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="/src/assets/team/twok.jpeg" alt="twok avatar" />
          </div>
        </div>
        <span className="badge badge-neutral badge-outline">twok</span>
      </div>
    </div>
  );
}

export default Badge;
