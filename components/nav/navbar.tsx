import Link from "next/link";
import Style from "./nav.module.scss"


import { INavBar, INavBarElement } from "./types";

const NavBarElement = ({ name }: INavBarElement) => (
    <li key={name} >
        <Link
            key={name}
            href={`/${name}`}
        >{name}</Link>
    </li>)

export const NavBar = (props: INavBar) => (
    <ul
        key="navbar"
        className={Style.nav}
    >
        {props.elements.map((name) => <NavBarElement name={name} />)}
    </ul>);
