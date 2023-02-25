import {
  Link,
} from "react-router-dom";

import './Home.scss';

const Home = () => {
  return (
    <>
      <ul>
        <li><Link to="/auth">Auth</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
      <h1>Home page</h1>
    </>
  );
}

export default Home;