import React from 'react';
import styles from './Rabbis.module.scss'

function Rabbis() {
    const rabbis = [
        {
            id: 0,
            name: 'Раввин Стив Блейн',
            image: 'https://simshalom.com/wp-content/uploads/2020/10/gI_101166_NewsImage_vcsPRAsset_2263853_101166_73fa1c5d-620c-43da-8391-28f9bc008bd3_0-150x150.png'
        },
        {
            id: 1,
            name: 'Раввин Элиас',
            image: 'https://simshalom.com/wp-content/uploads/2022/08/2-150x150-1-150x150.jpg'
        },
        {
            id: 2,
            name: 'Раввин Шари',
            image: 'https://simshalom.com/wp-content/uploads/2023/05/2023-01-20-13.02.43-150x150.jpg'
        },
        {
            id: 3,
            name: 'Раввин Карен',
            image: 'https://simshalom.com/wp-content/uploads/2018/05/Rabbi-Karen-150x150.png'
        },
        {
            id: 4,
            name: 'Раввин Нэнси',
            image: 'https://simshalom.com/wp-content/uploads/2022/02/headshot-150x150.jpg'
        }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.headtext}>Наши Раввины</h2>
                <div className={styles.rabbisblock}>
                    {rabbis.map((rabbis, index) => (
                        <div className={styles.rabbis}>
                            <img src={rabbis.image} alt="image"/>
                            <h4 className={styles.names}>{rabbis.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rabbis