import React from 'react';
import logo from '../../assets/synagogue-white-line-icon_116137-3672.svg'
import styles from './Footer.module.scss'

function Footer() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.block}>
                    {/*<img src={logo} alt="logo"/>*/}
                    {/*<h1 className={styles.textlogo}>Онлайн синагога</h1>*/}
                </div>
            </div>
        </div>
    )
}

export default Footer;