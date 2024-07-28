import React from 'react';
import logo from '../../assets/synagogue-white-line-icon_116137-3672.svg'
import styles from './Header.module.scss'

function Header() {
    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
            // containerId: 'ContainerElementID',
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
                    <li className={styles.aboutus}>О нас</li>
                    <li className={styles.rabbis}>Раввины</li>
                    <li className={styles.questions}>Вопросы</li>
                    <li className={styles.schedule}>Расписание</li>
                </ul>

                <button className={styles.button}>Поддержать</button>
            </div>
        </div>
    )
}

export default Header;