import { CircleSmall, Mail, Phone, User } from "lucide-react";
import React from "react";

const UserProfile = () => {
  return (
    <div className="border border-stone-300 rounded-md p-3">
      <div className="flex justify-between items-center max-w-6xl m-auto">
        <div className="flex items-start  gap-4">
          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#004B8D]">
            <span className="text-2xl font-bold text-white">K</span>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="flex items-center gap-2">
              {" "}
              <User size={18} /> <span>Koshish Khadka</span>
            </h1>
            <p className="flex items-center gap-2">
              <Mail size={18} /> <span>koshishkhadka321@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Phone size={18} /> <span>9843023686</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <CircleSmall size={18} /> <span>Male</span>
                </div>
              </div>
            </p>
            {/* <p className="flex items-center gap-2">
             
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p>Insurance</p>
            <p>UnitedHealthcare</p>
          </div>
          <div>
            <p>Medical Conditions</p>
            <p>Good</p>
          </div>
          <div>
            <p>Medical Conditions</p>
            <p>Good</p>
          </div>{" "}
          <div>
            <p>Medical Conditions</p>
            <p>Good</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
