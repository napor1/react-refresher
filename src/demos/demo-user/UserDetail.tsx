import { IUserData } from "./Page";

interface IParams {
  userData: IUserData;
}
export function UserDetail({ userData }: IParams) {
  return (
    <div>
      <div>
        <strong>Name:</strong>
        <span>{userData.name}</span>
      </div>
      <div>
        <strong>Email:</strong>
        <span>{userData.email}</span>
      </div>
    </div>
  );
}
