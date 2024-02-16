import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="game">new game</Link>
        </li>
        <li>
          <Link to="words">words</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
