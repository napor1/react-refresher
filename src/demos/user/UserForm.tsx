import { ChangeEvent } from "react";
import { IUserData } from ".";

interface IParams {
  userData: IUserData;
  onChange: (data: IUserData) => void;
}

export function UserForm({ userData, onChange }: IParams) {
  const handleChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...userData,
        [key]: event.target.value,
      });
    };

  return (
    <form style={{
      display: "flex",
      flexDirection: 'column'
    }}>
      <label>
        Name:
        <input
          type="text"
          value={userData.name}
          onChange={handleChange("name")}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={userData.email}
          onChange={handleChange("email")}
        />
      </label>
    </form>
  );
}
