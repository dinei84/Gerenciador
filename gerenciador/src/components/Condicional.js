import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        //console.log(userEmail)
    }
    return(        
        <div>
            <h2>Cadastre Seu Email</h2>
            <form>
                <input type='email'
                placeholder='Digite Seu Email...'
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail}
            </form>
        </div>
    )
}

export default Condicional