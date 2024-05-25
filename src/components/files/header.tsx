import headerstyle from '../css/header.module.scss';
import Group4 from '../assets/Group 4.png';

const Header = () => {
    return(
        <header className={headerstyle.head}>
            <div className={headerstyle.header_cont}>
                <img src={Group4} alt='logo' />
            </div>
        </header>
    )
}

export default Header;