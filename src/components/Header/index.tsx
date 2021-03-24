import { Container } from "./style";
import baliLogo from "../../assets/logobali.png";
import { NavLink, Link } from "react-router-dom";
import { routes_app } from "../../App";
import { HeaderProps } from "../../../types";

export function Header({ link, text, linkHref, onClick }: HeaderProps) {
  return (
    <Container>
      <div className="divFlex" id="header">
        <div>
          <Link to={routes_app.home}>
            <img src={baliLogo} alt="Logo servidor baliRoleplay" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              {link && <NavLink to={link}> {text} </NavLink>}

              {linkHref && <a href={linkHref}> {text} </a>}
              {!linkHref  && !link && <span onClick={onClick}> {text} </span>}
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
