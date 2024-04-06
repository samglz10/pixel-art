import { useState, useContext } from "react";
import { ColorContext } from "./colorContex";

function Cell(){
    const [active, setActive] = useState(false);
    const pickerColor = useContext(ColorContext);

    function handleCellChange(){
        setActive(true);
    }
    return(

        <div 
            style={ active ? {background: pickerColor.color} : undefined}
            className="cell" 
            onClick={handleCellChange}
        ></div>
    )
}
export default Cell;