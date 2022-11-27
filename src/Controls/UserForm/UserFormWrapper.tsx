import * as React from "react";

interface UserFormWrapperProps {
  children: any;
}

const UserFormWrapper: React.FunctionComponent<UserFormWrapperProps> = ({
  children,
}) => {
  return <div className="UserFormWrapper px-2 m-auto">{children}</div>;
};

export default UserFormWrapper;
