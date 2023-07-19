import './header.css';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import Link from '../Link/Link';
import { useState } from 'react';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(prevValue => {
            return !prevValue;
        });
    }

    return (
        <header className={isClicked ? "header flex w-100 change" : "header flex w-100"}>
            <button className="nav-toggler" onClick={handleClick}>
                <Hamburger />
            </button>
            <section className="logo">
                <Logo />
            </section>
            <section className={isClicked ? "nav-container w-100 flex show" : "nav-container invisible"}>
                <nav className={isClicked ? "navbar flex w-100 show" : "navbar flex invisible"}>
                    <button className="nav-toggler" onClick={handleClick}>
                        <Close />
                    </button>
                    <Link href='#' name='home' />
                    <Link href='#' name='shop' />
                    <Link href='#' name='about' />
                    <Link href='#' name='contact' />
                </nav>
            </section>
            <section className="holder invisible"></section>
        </header>
    );
}

export default Header;