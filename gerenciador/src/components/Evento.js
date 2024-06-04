
function Evento ({numero}){

    function meuEvento(){
        console.log(`Ativou o Evento!! ${numero}`)
    }
    return (
        <div>
            <p>Clique aqui para Ativar o evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento