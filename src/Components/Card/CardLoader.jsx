import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "./Card"

export function CardLoader()
{

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080")
        .then(response => setProducts(response.data))
        .catch(erro => console.error(erro))
        console.log(products)
    }, [])

    return(
        <>
            {
                products.map((data) =>(
                    <Card key={data.nome} nome={data.nome} marca={data.marca} valor={data.valor} imagem={data.imagem}/>
                ))
            }
        </>
    )
}