import type { NextPage } from 'next'
import data from '../data/sample.json'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Modal from './popUp'
import { useState } from 'react'

const SeriesCards: NextPage = (  ) => {

    const [showModal, setShowModal] = useState(false)
    const [cardInfo, setCardInfo] = useState({
        "title": "",
        "description": "",
        "programType": "",
        "images": {
          "Poster Art": {
            "url": "",
          }
        },
        "releaseYear": 2015
      },)

    let datos: {title: string, description: string, programType: string, images: {'Poster Art': {url: string}}, releaseYear: number}[] = [];

    datos = data.entries.filter(element => {
        return (element.releaseYear >= 2010) 
    })

    datos.sort(function (a,b){
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
    })

    return(
        <div className={styles.frameCards}>
            { 
                datos.map((card, index) => {
                    if(card.programType == 'series' && index<25)
                    return(
                        <div className={styles.fullCard} key={index}>
                            <button onClick={() => { setShowModal(true), setCardInfo(card) }} className={styles.btn}>
                            <div className={styles.card}>
                                <Image src={card.images['Poster Art'].url} alt="image" width={160} height={245}></Image>
                            </div>
                            </button>
                            <Modal show={showModal} onClose={() => setShowModal(false)} card={ cardInfo }>
                                    <Image src={cardInfo.images['Poster Art'].url} alt="image" width={240} height={367.5}></Image>
                                    <h3>{cardInfo.title}</h3>
                                    <p>{cardInfo.description}</p>
                                    <p>Year: {cardInfo.releaseYear}</p>
                            </Modal>
                            <p className={styles.title}>{card.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SeriesCards