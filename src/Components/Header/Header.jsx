import { useState } from "react"
import "./Header.css"
import { Modal } from "../Modal/Modal"
export function Header()
{

    const [isOpen, setOpen] = useState(false)

    return(
        <div className="head">
            <div className="head-content">
                <h1>Arthutis importados</h1>
                <button onClick={() => setOpen(!isOpen)}>adicionar</button>
            </div>
            <Modal isOpen={isOpen} setOpen={() => setOpen(!isOpen)}/>
        </div>
    )
}