import React from 'react';
import logo from '../../assets/lofofo.png'
import styles from './Footer.module.scss'

function Footer() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.mainblock}>
                    <div className={styles.logoline}>
                        <img className={styles.logo} src={logo} alt="logo"/>
                        <h1 className={styles.footertext}>Онлайн<br/>синагога</h1>
                    </div>
                    <p className={styles.paragrph}>Онлайн синагога © [2024]. Все права защищены</p>
                </div>
                <div className={styles.block}>
                    <p className={styles.par}>Контакты</p>
                    <div className={styles.hfour}>
                        <p className={styles.par}>help@onlinesynagoga.ru</p>
                        <p className={styles.par}>+7-960-996-95-76</p>
                    </div>
                </div>
                <div className={styles.block}>
                <p className={styles.par}>Пользовательское соглашение</p>
                    <p className={styles.par}>Политика оплаты и возврата</p>
                    <p className={styles.par}>Политика использования Cookie</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;