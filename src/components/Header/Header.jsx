import React from 'react';
import {scroller } from 'react-scroll';
import logo from '../../assets/synagogue-white-line-icon_116137-3672.svg'
import styles from './Header.module.scss'
import Modal from "../Modal/Modal";

function Header({activeBurger, setActiveBurger}) {
    const [active, setActive] = React.useState(false)
    console.log(activeBurger)

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
        });
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logowrapper}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <h1 className={styles.textlogo}>Онлайн синагога</h1>
                </div>
                <ul className={styles.list}>
                    <li className={styles.aboutus} onClick={() => scrollTo('aboutus')}>О нас</li>
                    <li className={styles.rabbis} onClick={() => scrollTo('rabbis')}>Раввины</li>
                    <li className={styles.questions} onClick={() => scrollTo('questions')}>Вопросы</li>
                    <li className={styles.schedule} onClick={() => scrollTo('schedule')}>Расписание</li>
                </ul>
                <button className={styles.button} onClick={() => setActive(true)}>Поддержать</button>

                <div className={styles.burger}>
                    {activeBurger ?
                        <svg onClick={() => setActiveBurger(false)} width="35" height="35" viewBox="0 0 35 35"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3848 8L8 26.3848M26.3848 26.3848L8 8" stroke="#07040C" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg> :
                        <svg className={styles.openmodal} onClick={() => setActiveBurger(true)} width="35" height="35"
                             viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9H31M5 17.5H31M5 26H31" stroke="#07040C" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>}
                </div>
            </div>
        </div>
    )
}

export default Header;