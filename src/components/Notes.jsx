// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "../MyContext";
// import { nanoid } from "nanoid";
// import styles from './Notes.module.css'

// function Notes({ date }) {

//     let notes
//     //let { setObjectOfNotes } = useContext(MyContext);
//     let [done, setDone] = useState(JSON.parse(localStorage.getItem('doneNotes')));
//     let [elem, setElem] = useState('');
//     let [valueInput, setValueInput] = useState('');


//     if (localStorage.getItem('doneNotes') === null) localStorage.setItem('doneNotes', JSON.stringify([]));

//     function addNotes(e) {
//         if (localStorage.getItem(date) === null) {
//             localStorage.setItem(date, JSON.stringify([valueInput]));
//         } else {
//             localStorage.setItem(date, JSON.stringify([...JSON.parse(localStorage.getItem(date)), valueInput]));
//         }
//         setValueInput('');
//     }

//     function getDone(note) {
//         localStorage.setItem('doneNotes', JSON.stringify([...done, note]))
//         setDone(JSON.parse(localStorage.getItem('doneNotes')));
//     }

//     function deleteNote(note) {

//         localStorage.setItem(date, JSON.stringify(JSON.parse(localStorage.getItem(date)).filter((el) => {
//             if (el == note) return false;
//             return note;
//         })))

//     }

//     function editNote(note) {
//         setElem(note);
//         setValueInput(note);
//     }

//     function saveChange() {
//         localStorage.setItem(date, JSON.stringify(JSON.parse(localStorage.getItem(date)).map(el => {
//             if (el === elem) return valueInput;
//             return el;
//         })));
//         setElem('');
//         setValueInput('');
//     }


//     if (localStorage.getItem(date) !== null) {
//         notes = JSON.parse(localStorage.getItem(date)).map((note) => {
//             return <div key={nanoid()} >
//                 <p className={JSON.parse(localStorage.getItem('doneNotes')).includes(note) ? styles.noteDone : null} >{note}</p>
//                 <button onClick={() => getDone(note)} >done</button>
//                 <button onClick={() => editNote(note)} >edit</button>
//                 <button onClick={() => deleteNote(note)} >delete</button>
//             </div>
//         })
//     }

//     return <>
//         <div className={styles.notesInput}>
//             <input className={styles.input} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
//             <button onClick={elem ? saveChange : addNotes}>{elem ? 'save' : 'add'}</button>
//         </div>
//         {notes}

//     </>
// }

// export default Notes;

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import { nanoid } from "nanoid";
import styles from './Notes.module.css'

function Notes({ date }) {
    let notes;
    let { setObjectOfNotes } = useContext(MyContext);
    let { objectOfNotes } = useContext(MyContext);
    let [done, setDone] = useState(JSON.parse(localStorage.getItem('doneNotes')));
    let [elem, setElem] = useState('');
    let [valueInput, setValueInput] = useState('');

    if (localStorage.getItem('doneNotes') === null) localStorage.setItem('doneNotes', JSON.stringify([]));

    function getObjectOfNotes() {
        setObjectOfNotes(() => {
            let obj = {};
            Object.keys(localStorage).forEach((el) => {
                obj[el] = JSON.parse(localStorage.getItem(el));
            });
            return obj;
        })
    }

    function addNotes(e) {
        if (localStorage.getItem(date) === null) {
            localStorage.setItem(date, JSON.stringify([valueInput]));
        } else {
            localStorage.setItem(date, JSON.stringify([...JSON.parse(localStorage.getItem(date)), valueInput]));
        }
        getObjectOfNotes();
    }

    function getDone(note) {
        localStorage.setItem('doneNotes', JSON.stringify([...done, note]))
        setDone(JSON.parse(localStorage.getItem('doneNotes')));
    }

    function deleteNote(note) {
        localStorage.setItem(date, JSON.stringify(JSON.parse(localStorage.getItem(date)).filter((el) => {
            if (el == note) return false;
            return note;
        })))
        getObjectOfNotes();
    }

    function editNote(note) {
        setElem(note);
        setValueInput(note);
    }

    function saveChange() {
        localStorage.setItem(date, JSON.stringify(JSON.parse(localStorage.getItem(date)).map(el => {
            if (el === elem) return valueInput;
            return el;
        })));
        getObjectOfNotes();
        setElem('');
        setValueInput('');
    }


    if (localStorage.getItem(date) !== null) {
        notes = objectOfNotes[date].map((note) => {
            return <div key={nanoid()} >
                <p className={JSON.parse(localStorage.getItem('doneNotes')).includes(note) ? styles.noteDone : null} >{note}</p>
                <button onClick={() => getDone(note)} >done</button>
                <button onClick={() => editNote(note)} >edit</button>
                <button onClick={() => deleteNote(note)} >delete</button>
            </div>
        })
    }

    return <>
        <div className={styles.notesInput}>
            <input className={styles.input} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
            <button onClick={elem ? saveChange : addNotes}>{elem ? 'save' : 'add'}</button>
        </div>
        {notes}
    </>
}

export default Notes;







