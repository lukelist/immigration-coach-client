import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function HomePage() {
  const {user} = useContext(AuthContext)
  const { isLoggedIn } = useContext(AuthContext);
  console.log(user)

    return (
     <>
      {isLoggedIn && (
  
      <div>
        <h1 className="greeting3">Welcome { user?.name}!</h1>
        <img className="landingPage" src="../planner.jpg" alt="planner"/>
      </div>
      )}

      {!isLoggedIn && (
      
      <div>
        <h1 className="greeting1">Immigration Coach</h1>
        <h2 className="greeting2"> Your immigration journey simplified</h2>
      <img className="landingPage" src="../pencils.jpg" alt="homepage"/>
      </div>
    )}
      </>
    );
  }
  
  export default HomePage;