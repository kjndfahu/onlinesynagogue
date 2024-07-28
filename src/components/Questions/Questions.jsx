import React from 'react';
import styles from './Questions.module.scss'
import Item from './Item/Item'
import {Element} from "react-scroll";

function Questions() {
    const data = [
        {

            q: 'Что такое Ктуба?',
            a: 'Это документ, в котором перечисляются обязательства, которые берёт на себя жених, и права его будущей жены. В первую очередь «ктуба» подтверждает обязанности мужа, предписанные ему Торой: «Пищи, одежды и супружеской близости он не лишит её»'
        },
        {

            q: 'Сколько стоит курс?',
            a: 'Каждый из восьми курсов стоит 150 долларов. Этот сбор необходимо оплатить, прежде чем вам будет предоставлен доступ к учебным модулям. Вам также необходимо будет приобрести книги, которые будут стоить около 75 долларов. Существует также плата в размере 300 долларов, которую необходимо заплатить Бет Дину (раввину), чтобы он наблюдал за вашим обращением. Таким образом, общая стоимость составляет 1500 долларов США + книги.'
        },
        {

            q: 'Какие основные еврейские праздники?',
            a: 'Основными еврейскими праздниками являются: Йом Кипур, Суккот, Ханукка, Пурим, Пейсах, Йом Зикарон, День независимости Израиля'
        },
    ]

    return(
        <Element name='questions'>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>Вопросы</h1>
                    <div className={styles.accordion}>
                        {data.map((item) => (
                            <Item item={item} key={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </Element>

    )
}

export default Questions