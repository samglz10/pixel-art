import { useState } from "react";

function Cell(){
    const [active, setActive] = useState(false);

    function handleCellChange(){
        setActive(true);
    }


    return(
    <div 
        style={ active ? {background:"red"} : undefined}
        className="cell" 
        onClick={handleCellChange}
    ></div>
    )
}
export default Cell;