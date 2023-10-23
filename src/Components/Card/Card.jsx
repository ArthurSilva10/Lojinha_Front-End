import './Card.css'
export function Card(props)
{
    return(
        <div className="card">
            <img src={props.imagem} width={190} height={190}/>
            <p><strong>{props.nome}</strong></p>
            <p><strong>{props.marca}</strong></p>
            <p><strong>R${props.valor}</strong></p>
        </div>
    )
}