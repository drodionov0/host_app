import headerstyle from '../css/header.module.scss';
import Group4 from '../assets/Group 4.png';
import arrow from '../assets/arrow-right.png'

const Header = () => {
    return(
        <header className={headerstyle.head}>
            <div className={headerstyle.header_cont}>
                <img src={Group4} alt='logo' />
                <nav className={headerstyle.navb}>
                    <ul className={headerstyle.ui_navb}>
                        <li><a href='#' className={headerstyle.link}>Solutions</a></li>
                        <li><a href='#' className={headerstyle.link}>Plans</a></li>
                        <li><a href='#' className={headerstyle.link}>Why Us</a></li>
                        <li><a href='#' className={headerstyle.link}>About</a></li>
                        <li><a href='#' className={headerstyle.link}>Login</a></li>
                        <button className={headerstyle.but}>
                            Get Started
                            <img src={arrow} alt='arrow' />
                        </button>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header;