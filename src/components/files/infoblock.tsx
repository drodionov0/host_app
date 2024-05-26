import styles from '../css/infoblock.module.scss';
import Group from '../assets/Group.png';
import arrow from '../assets/arrow-right.png';
import logos from '../assets/Group 15.png';
import logo2 from '../assets/Group 15logo2.png';
import logo3 from '../assets/Combined Shape.png';
import logo4 from '../assets/Group 15 (2).png';

const Infoblock = () => {
    return(
        <div className={styles}>
            <div className={styles.page}>
                <div className={styles.infocont}>
                    <img src={Group} alt='logo' />
                    <div className={styles.info}>
                        <h2>Create. Deploy. Rest</h2>
                        <p className={styles.col}>HostusPocus is your ultimate solution for all hosting needs, it combines global deployment, continuous integration, and automatic HTTPS. And that’s just for now!</p>
                        <button className={styles.but}>
                            Get Started for Free
                            <img src={arrow} alt='arrow' />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.row1}>
                    <div className={styles.card}>
                        <img src={logos} alt='logo1' />
                        <h2>Secure</h2>
                        <p className={styles.gr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. </p>
                    </div>
                    <div className={styles.card}>
                        <img src={logo2} alt='logo2' />
                        <h2>99.9% SLA Guarantee</h2>
                        <p className={styles.gr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. </p>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.card}>
                        <img src={logo3} alt='logo3' />
                        <h2>24x7 Quality Support</h2>
                        <p className={styles.gr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.  </p>
                    </div>
                    <div className={styles.card}>
                        <img src={logo4} alt='logo4' />
                        <h2>12 years in the business</h2>
                        <p className={styles.gr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infoblock;