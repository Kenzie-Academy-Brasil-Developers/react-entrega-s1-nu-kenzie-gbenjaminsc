import { useState } from 'react'
import './styleForm.css'

function Form ({listTransactions, setListTransactions}){

    const [userInput, setUserInput]   = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userSelect, setUserSelect] = useState('entrada')
    const [objeto, setObjeto]         = useState({})

    function enviar(){
        const obj = {description: userInput, type:userSelect, value:userNumber}

        setObjeto(obj)
        setListTransactions([...listTransactions, obj])
    }

    return(
        <form>

            <div className='containerDescricao'>
                <p>Descrição</p>
                <input 
                    type="text" 
                    placeholder="Digite aqui sua descrição" 
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                />
                <p>Ex.: Compra de roupas</p>
            </div>

            <div className='containerValor'>
                <p>Valor</p>
                <input 
                    type="number"
                    placeholder='1 R$'
                    value={userNumber} 
                    onChange={(event) => setUserNumber(event.target.value)}
                />
                <select onChange={(event) => setUserSelect(event.target.value)}>
                    <option>Selecionar</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
            </div>

            <button className='btnAdd' onClick={enviar}>Inserir Valor</button>
            
        </form>
    )

}

export default Form