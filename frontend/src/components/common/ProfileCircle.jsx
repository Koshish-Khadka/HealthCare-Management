const ProfileCircle = ({ username }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004B8D] cursor-pointer">
      <p className="text-white text-sm font-semibold">{username}</p>
    </div>
  );
};

export default ProfileCircle;
