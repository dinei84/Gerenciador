import Filho from './Filho'

function Pai (){
  function Evento (){
    console.log('Primeiro Evento!')
  }

  function Evento_dois(){
    console.log('Segundo evento!')
  }

  return (
    <div>
      <p>Clique para ativar o Evento!</p>
      <Filho event={Evento} text='Ativar!!' />

      <p>Clique para ativar o Segundo Evento!</p>
      <Filho event={Evento_dois} text='Ativar!!' />
    </div>
    
  )
}

export default Pai