import BreadCrumbs from "../../components/common/BreadCrumbs";
import UserProfile from "../../components/layout/userDetail/UserProfile";

const UserDetailPage = () => {
  return (
    <div>
      <div className="flex ">
        <BreadCrumbs />
      </div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
};

export default UserDetailPage;
