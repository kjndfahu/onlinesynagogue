import React from 'react'
import styles from './Modal.module.scss'

function Modal({active, setActive}){
    return (
        <div className={active ? `${styles.wrapperactive} ${styles.wrapper}` : styles.wrapper} onClick={() => setActive(false)}>
            <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                <div className={styles.supportblock}>
                    <div className={styles.firstsupp}>
                        <div className={styles.titleandlogo}>
                            <h2>Поддержать</h2>
                            <svg onClick={() => setActive(false)} width="35" height="35" viewBox="0 0 35 35"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.3848 8L8 26.3848M26.3848 26.3848L8 8" stroke="#07040C"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.contentbody}>
                        <div className={styles.reg}>
                            <h3>Сбербанк</h3>
                            <p className={styles.paragraph}>Вероника Шираковна С.</p>
                            <h4>2202208023225403</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal