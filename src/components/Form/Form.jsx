import { useState } from 'react'
import './styleForm.css'

function Form ({listTransactions, setListTransactions}){

    const [userInput, setUserInput]   = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userSelect, setUserSelect] = useState('entrada')
    const [objeto, setObjeto]         = useState({})

    function enviar(event){
        event.preventDefault()
        const obj = {description: userInput, type:userSelect, value:userNumber, id:Date.now()}

        setObjeto(obj)
        setListTransactions([...listTransactions, obj])
    }

    return(
        <form onSubmit={enviar}>

            <div className='containerDescricao'>
                <p id='tituloDesc'>Descrição</p>
                <input 
                    type="text" 
                    placeholder="Digite aqui sua descrição" 
                    value={userInput}
                    required
                    onChange={(event) => setUserInput(event.target.value)}
                />
                <p>Ex.: Compra de roupas</p>
            </div>

            <div className='containerValor'>
                <div className='divValor'>
                <p>Valor</p>
                    <input 
                        type="number"
                        placeholder='1 R$'
                        value={userNumber} 
                        required
                        onChange={(event) => setUserNumber(event.target.value)}
                    />
                </div>

                <div className='divSelect'>
                    <p>Tipo de Valor</p>
                    <select onChange={(event) => setUserSelect(event.target.value)}>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
            </div>

            <button className='btnAdd'>Inserir Valor</button>
            
        </form>
    )

}

export default Form