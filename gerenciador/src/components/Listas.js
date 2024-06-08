function Lista ({lista}){
    return(
        <>
            <h3>Listas</h3>

            {   
            lista.length > 0 ? (
                    lista.map((item, index) => (
                        <p key={index}>{item}</p>                    
            ))) : (
                <p>Não há itens na lista</p>
            )}            
        </>
    )
}

export default Lista