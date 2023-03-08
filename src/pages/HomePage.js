import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function HomePage() {
  const {user} = useContext(AuthContext)
  console.log(user)
    return (
      <div>
        <h1>Dashboard Placeholder</h1>
        <p>Hello, { user?.name}!</p>
      </div>
    );
  }
  
  export default HomePage;