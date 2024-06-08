import { useState } from "react";

function Condicionaldois(){

    const [email,setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log()
    }
    function limpar(){
        setEmail('')
        setUserEmail('')
    }

    return(
        <div>
            <input type="email"
                   placeholder="Digite Seu email..."
                   onChange={(e)=>{
                    setEmail(e.target.value)
                   }}>

            </input>
            <button type="submit" onClick={enviarEmail} >Enviar</button>
            {userEmail &&(
                <div>
                    O usuario é: {userEmail}
                    <button onClick={limpar} >Limpar</button>
                </div>                
            )}
        </div>
    )
}
export default Condicionaldois