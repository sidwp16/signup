import React, { useContext, useEffect } from "react";
import authContext from "../../context/auth/AuthContext";

const Home = () => {
  const AuthContext = useContext(authContext);

  const { user } = AuthContext;

  useEffect(() => {
    AuthContext.loadUser();
  }, []);

  return (
    <div className="grid-1 welcome">
      <div>
        <h1>
          Hello, {user && user.name} <br />
          Thanks for signing up{" "}
        </h1>
      </div>
    </div>
  );
};

export default Home;
