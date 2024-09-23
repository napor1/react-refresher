import { useState } from "react";
import { UserForm } from "./UserForm";
import { UserDetail } from "./UserDetail";

export interface IUserData {
  name: string;
  email: string;
}

export default function Page() {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    email: "",
  });

  const toggleEditMode = () => setIsEditable(!isEditable);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Personal Infomation</h2>
      {isEditable ? (
        <UserForm userData={userData} onChange={setUserData} />
      ) : (
        <UserDetail userData={userData} />
      )}
      <button onClick={toggleEditMode}>
        {isEditable ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
}
