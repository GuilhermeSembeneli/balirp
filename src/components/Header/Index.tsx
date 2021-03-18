import { Container } from "./style";
import baliLogo from "../../assets/logobali.png";
import { NavLink, Link } from "react-router-dom";
import { HeaderProps } from "../../interface";
import { routes_app } from "../../App";

export function Header({link, text}: HeaderProps) {
  return (
    <Container>
      <div className="divFlex">
        <div>
          <Link to={routes_app.home}>
            <img src={baliLogo} alt="Logo servidor baliRoleplay" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={link}> {text} </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
