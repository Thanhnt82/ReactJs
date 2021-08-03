import { isAuthenticated } from "auth";
import { Redirect, Route } from "react-router-dom";
const PrivateAdmin = (props) => {
  return (
    <Route
      render={() => {
        if (isAuthenticated() && isAuthenticated().user.id == 1) {
          return props.children;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};
export default PrivateAdmin;
