import { Link } from "react-router-dom";

import { Navigation, LinkList } from "./Main.styled";

const Main = () => {
  return (
    <Navigation>
      <LinkList>
        <li>
          <Link to="game">new game</Link>
        </li>
        <li>
          <Link to="words">words</Link>
        </li>
      </LinkList>
    </Navigation>
  );
};

export default Main;
