import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div>
      <h2>Home</h2>
      {email && <p>Welcome, {email}!</p>}
    </div>
  );
};

export default Home;
