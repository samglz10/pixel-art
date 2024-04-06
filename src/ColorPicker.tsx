import { useContext } from "react";
import { ColorContext } from "./colorContex";

const colors = ['green','red','yellow',
                'blue','brown','purple',
                'pink', 'magenta','yellowgreen',
                'grey'
                ]



function ColorPicker(){
const c = useContext(ColorContext);
    const handleColorChange =(color:string)=>{
        c.setColor(color);
    }
    return(
        <div className="color-picker">
            {colors.map((color)=>{
                return <div 
                    key={color}
                    onClick={()=>{handleColorChange(color)}}
                    className="color-picker-color" 
                    style={{backgroundColor: color}}>
            </div>
            })}
        </div>
    )
}
export default ColorPicker;