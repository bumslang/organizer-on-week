import { MyContext } from "./MyContext.jsx";
import ArrowBack from "./components/ArrowBack.jsx";
import ArrowForward from "./components/ArrowForward.jsx";
import Week from "./components/Week.jsx";
import './App.css'
import { useState } from "react";

function App() {
  let [countDay, setCountDay] = useState(0);
  let [valueInput, setValueInput] = useState('');
  let today = new Date();
  let arrayOfDates = [...Array(7)].map((el, ind) => {
    return new Date(
      today.getFullYear(), today.getMonth(), (today.getDate() - today.getDay() + 1 + countDay) + ind).toDateString();
  })
  let [objectOfNotes, setObjectOfNotes] = useState(() => {
    let obj = {};
    Object.keys(localStorage).forEach((el) => {
      obj[el] = JSON.parse(localStorage.getItem(el));
    });
    return obj;
  });
  return (
    <div className="container">
      <MyContext.Provider value={{ today, countDay, setCountDay, arrayOfDates, objectOfNotes, setObjectOfNotes, valueInput, setValueInput,  }} >
        <ArrowBack />
        <Week />
        <ArrowForward />
      </MyContext.Provider>
    </div>
  )
}

export default App;
