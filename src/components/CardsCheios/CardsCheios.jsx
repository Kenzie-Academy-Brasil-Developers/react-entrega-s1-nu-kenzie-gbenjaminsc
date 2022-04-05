import Cards from "./Cards/Cards";

function CardCheio({listTransactions, obj, setListTransactions}) {
    
    return (

        <div className="containerCard">
            
        <div>
            <h2>Resumo financeiro</h2>
            
            <div className="containerBtnFiltros">
                <button id="btnTodos">Todos</button>
                <button className="botao">Entradas</button>
                <button className="botao">Despesas</button>
            </div>                
        </div>

        <Cards listTransactions={listTransactions} obj={obj} setListTransactions={setListTransactions}/>        

    </div>

    )

}

export default CardCheio