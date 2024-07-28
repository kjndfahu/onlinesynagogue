import React from 'react';
import styles from './BurgerMenu.module.scss'
import {scroller} from "react-scroll";


const BurgerMenu = ({isActive, setActive}) => {

    React.useEffect(() =>{
        if (isActive) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

    }, [isActive])

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
            // containerId: 'ContainerElementID',
        });

        setActive(false);
    }

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
            <div className={styles.list}>
                <li className={styles.aboutus} onClick={() => scrollTo('aboutus')}>О нас</li>
                <li className={styles.rabbis} onClick={() => scrollTo('rabbis')}>Раввины</li>
                <li className={styles.questions} onClick={() => scrollTo('questions')}>Вопросы</li>
                <li className={styles.schedule} onClick={() => scrollTo('schedule')}>Расписание</li>
            </div>
            <div className={styles.infoblock}>
                <div className={styles.secondblock}>
                    <p className={styles.headoflist}>Контакты</p>
                    <h4>help@onlinesynagoga.ru</h4>
                    <h4>+7-960-996-95-76</h4>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;