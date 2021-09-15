import React, { useEffect, useState } from 'react'
import styles from './styles/Proyects.module.css'
import { Proyect } from '../../domain/Proyect'
import { proyectJSONService } from '../../domain/Proyect.service'

export default function ProyectList() {
    const [proyects, setProyects] = useState<Proyect[]>([])
    useEffect(() => {
        const response = proyectJSONService.getProyects()
        setProyects(response)
    }, [])

    return (
        <section className={styles.section}>
            <h2 className={styles.titleHead}>
                My projects
            </h2>
            <ul className={styles.list}>
                {
                    proyects.map((proyect) =>
                        <li className={styles.item}>
                            <h3 className={styles.title}>
                                {proyect.title}
                            </h3>
                            <p>
                            {proyect.description}
                            </p>
                        </li>
                    )}
            </ul>
        </section>
    )
}
