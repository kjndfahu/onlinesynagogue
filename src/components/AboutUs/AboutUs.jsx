import React from 'react';
import styles from './AboutUs.module.scss'
import synagogue from '../../assets/depositphotos_319759396-stock-photo-interior-of-the-jewish-synagogue.jpg'
import {Element} from "react-scroll";

function AboutUs() {
    return (
        <Element name='aboutus'>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.animbox}>
                        <img className={styles.synagogue} src={synagogue} alt="synagogue"/>
                    </div>
                    <div className={styles.texts}>
                        <h2 className={styles.headtext}>О синагоге</h2>
                        <p className={styles.text}>Добро пожаловать в нашу онлайн-синагогу,
                            где традиции и современные технологии объединяются, чтобы создать уникальное
                            пространство для духовного роста, общения и обучения.Наша синагога была
                            основана с целью объединить еврейскую общину и предоставить всем
                            желающим возможность участвовать в религиозной жизни, независимо
                            от их местоположения. Мы гордимся нашей богатой историей и стремимся
                            сохранить традиции, передавая их новым поколениям через
                            современные средства связи.</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutUs