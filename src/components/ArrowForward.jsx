import { useContext, useState } from "react";
import { MyContext } from "../MyContext";


function ArrowForward() {
    let { countDay } = useContext(MyContext);
    let { setCountDay } = useContext(MyContext);
    

    function getForward(e) {
       
        setCountDay(countDay + 7);
    }

    return <>
        <button onClick={getForward} >forward</button>
    </>
}

export default ArrowForward;