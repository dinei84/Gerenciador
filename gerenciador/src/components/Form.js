import {useState} from 'react'

function Form(){
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} cadastrado com o Endereço: ${endereco}, e sua senha é: ${password}!`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [endereco, setEndereco]  = useState()

    return (
        <div>
            <h1>Meu Formulario</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type='text' id='name' name='name' placeholder='Digite o seu Nome:' onChange={(e)=> setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='endereco'>Endereço: </label>
                    <input type='text' id='endereco' name='endereco' placeholder='Digite o seu Endereço:' onChange={(e)=> setEndereco(e.target.value)}></input>
                </div>
                <div>
                <label htmlFor=''>Senha: </label>
                    <input type='password' id='password' name='password' placeholder='Digite sua Senha' onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type='submit' placeholder='Cadastrar'></input>
                    <input type='reset' placeholder='Redefinir'></input>
                </div>
                
                
            </form>
        </div>
    )
}

export default Form