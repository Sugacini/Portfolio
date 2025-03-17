import "../style.css";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return (
        <div className="headerOuter">
            <Logo name="Sugacini"></Logo>
            <ul className="menuOuter">
                <Menu menuName="Home" link="#home" className="menus" id="menu1"></Menu>
                <Menu menuName="Skills" link="#skills"  className="menus" id="menu2"></Menu>
                <Menu menuName="Project" link="#projects"  className="menus" id="menu3"></Menu>
                <Menu menuName="Other Projects" link="#others" className="menus" id="menu4"></Menu>
            </ul>
        </div>
    )
}

export default Header;