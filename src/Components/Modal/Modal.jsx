import { useState } from 'react'
import './Modal.css'
import axios from 'axios'
export function Modal({isOpen, setOpen})
{
    
    const [Nome, setNome] = useState('')
    const [Marca, setMarca] = useState('')
    const [preco, setPreco] = useState(0)
    const [link, setLink] = useState(0)

    const data ={
        nome: Nome,
        marca: Marca,
        valor: preco,
        imagem: link
    }

    const cadastrar = (e) =>
    {
        axios.post("http://localhost:8080/produtos", data)
        .catch(erro => console.error(erro))
        location.reload()
    }
    if(isOpen)
    {
        return(
            <div className="back">
                <div className="content">
                    <h1>Cadastrar produto</h1>
                    <div className="input">
                        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Marca" onChange={(e) => setMarca(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Preço" onChange={(e) => setPreco(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Url da imagem" onChange={(e) => setLink(e.target.value)}/>
                    </div>
                    <div className="sub">
                        <button onClick={cadastrar}>Cadastrar</button>
                        <button onClick={setOpen}>Fechar</button>
                    </div>
                </div>
            </div>
        )
    }
}