import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

function ArrowBack() {
    let { countDay } = useContext(MyContext);
    let { setCountDay } = useContext(MyContext);

    function getBack() {
        setCountDay(countDay - 7);
    }

    return <>
        <button onClick={getBack} >Back</button>
    </>
}

export default ArrowBack;