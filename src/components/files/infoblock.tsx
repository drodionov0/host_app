import styles from '../css/infoblock.module.scss';
import Group from '../assets/Group.png';
import arrow from '../assets/arrow-right.png';
import logos from '../assets/Group 15.png';
import logo2 from '../assets/Group 15logo2.png';
import logo3 from '../assets/Group 15 (1) (1).png';
import logo4 from '../assets/Group 15 (2).png';
import logo5 from '../assets/Bitmap (2).png';

const Infoblock = () => {
    return(
        <body>
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
                <div className={styles.startart}>
                    <div className={styles.back}>
                        <h2>You’re on the right track!</h2>
                        <p>Your first two months are on us. Get 50$ OFF on your first order</p>
                        <button className={styles.but3}>
                            Get Started for Free
                            <img src={arrow} alt='two' />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.questions}>
                <div className={styles.block}>
                    <h2>Still have questions?</h2>
                    <p>Free Setup on all plans. No credit card required for free trial.</p>
                    <div className={styles.hav}>
                        <button className={styles.but4}>Chat with an Expert</button>
                        <button className={styles.but3}>
                            Get Started for Free
                            <img src={arrow} alt='two' />
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <div className={styles.container}>
                    <img src={logo5} alt='logo5' />
                </div>
            </footer>
        </body>
    )
}

export default Infoblock;