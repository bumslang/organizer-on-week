

import { useContext, useEffect, useState } from 'react'
import styles from './Day.module.css'
import { MyContext } from '../MyContext';
import { nanoid } from 'nanoid';
import Notes from './Notes';

function Day() {
    let { arrayOfDates } = useContext(MyContext);

    return <>
        {arrayOfDates.map(date => {
            return (
                <div key={nanoid()} className={new Date().toDateString() === date ? styles.today : styles.day}>
                    <p>{date}</p>
                    <Notes date={date} />
                </div>
            );
        })}
    </>
}

export default Day;