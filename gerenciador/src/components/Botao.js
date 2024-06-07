
function Botao ({evento,texto,style}){
    return (
        <div>
            <div>
                <button style={style} onClick={evento}>{texto}</button>
            </div>            
        </div>
        
    )
}

export default Botao