import Cards from "./Cards/Cards";
import { useState } from 'react'

function CardCheio({listTransactions, setListTransactions}) {
    
    const [filtrados, setFiltrados] = useState(listTransactions)
    
    function filtro(event) {
        const filtradas = listTransactions.filter((item) =>
            event.target.value === item.type
        )
        if(filtradas.length === 0){
            setFiltrados(listTransactions)
        }else{
        setFiltrados(filtradas)
        }
    }

    return (

        <div className="containerCard">
            
        <div>
            <h2>Resumo financeiro</h2>
            
            <div className="containerBtnFiltros">
                <button className="botao" value='todos' onClick={filtro}>Todos</button>
                <button className="botao" value='entrada' onClick={filtro}>Entradas</button>
                <button className="botao" value='saida' onClick={filtro}>Despesas</button>
            </div>                
        </div>

        <Cards listTransactions={filtrados} setListTransactions={setListTransactions}/>        

    </div>

    )

}

export default CardCheio