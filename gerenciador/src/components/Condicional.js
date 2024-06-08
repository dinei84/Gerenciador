import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')

    function enviarEmail(e){
        e.preventDefault()
        if(email.trim() === ''){
            setError('Por Favor Preencha Corretamente o email!')
        }else{
            setUserEmail(email)
            //console.log(`O email do usuario é: ${email}`)
            setError('') 
        }
               
    }

    function Limpar(){
        setUserEmail('')
        setEmail('')
        setError('')        
    }

    return(        
        <div>
            <h2>Cadastre Seu Email</h2>
            <form>
                <input  type='email'
                        placeholder='Digite Seu Email...'
                        onChange={(e)=>{
                        setEmail(e.target.value)
                }}
                />
                <button onClick={enviarEmail}>Enviar Email</button>                
            </form>
            {error &&(
                <div style={{color:'red'}}>
                    {error}
                </div>
            )}
            {userEmail &&(
                    <div>
                        O email do cliente é: {userEmail}
                        <button onClick={Limpar}>Limpar</button>
                    </div>
                )}
        </div>
    )
}

export default Condicional