import React from "react";
import styles from './Schedule.module.scss'
import menorah from '../../assets/9113186_menorah_solid_icon.svg'
import davidstar from '../../assets/9113702_star_of_david_solid_icon.svg'

function Schedule() {
    const schedule = [
        {
            name: 'Каббалат Шаббат',
            p: 'Каждую пятницу вечером в 19:00 по восточному стандартному времени раввин Стивен Блейн, ' +
                'ведет участников вечерней субботней службы. Раввин Стив играет на фортепиано или гитаре' +
                ' во время служб.Службы полностью коллективны: вы можете просматривать свой молитвенник и ' +
                'общаться с другими зрителями со всего мира.Все услуги записываются и доступны для просмотра ' +
                'в любой момент времени.',
        },
        {
            name: 'Маарив',
            p: 'Услуги Маарива предлагаются с понедельника по четверг в 19:00 по восточному стандартному времени. ' +
                'Миряне и раввины, рукоположенные JSLI, возглавляют службы Маарив. Службы «Маарив» дают ' +
                'участникам возможность произнести «Кадиш скорбящих» или «Ми-шебайрах» (молитву за больных).' +
                'Молитвы проецируются на экран зрителей, и участники могут общаться в чате.',
        }
    ]

    console.log(schedule)

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.maintext}>Расписание</h1>
            {schedule.map((event) => (
                <div className={styles.blocks}>
                    <div className={styles.texts}>
                        <h2 className={styles.headtext}>{event.name}</h2>
                        <p className={styles.text}>{event.p}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Schedule