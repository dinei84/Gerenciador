import { useState } from 'react'
import Botao from './Botao'

function EventoPai (){
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px'
    })

    function Curtir(){
        console.log('Curtido')
    }
    function Compartilhar(){
        console.log('Compartilhado')
    }
    function MudarAparencia(){
        setButtonStyle(prevStyle =>({
            ...prevStyle,
            backgroundColor: prevStyle.backgroundColor === 'blue' ? 'green' : 'blue'
        }))
    }

    return (
        <div>
            <div>
                <p>Clique aqui para curtir</p>
                <Botao evento={Curtir} texto={'Curtir'} style={buttonStyle}/>
            </div>
            <div>
                <p>Clique aqui para Compartilhar</p>
                <Botao evento={Compartilhar} texto={'Compartilhar'} style={buttonStyle}/>
                <p>Clique aqui para Mudar a Aparência</p>
                <Botao evento={MudarAparencia} texto={'Mudar a Aparência'} style={buttonStyle}/>
            </div>
            <div>
                
            </div>
            
        </div>
    )
}

export default EventoPai