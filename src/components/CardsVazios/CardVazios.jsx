import SemCard from "./SemCard/SemCard"
import './styleCardVazios.css'

function CardsVazios(props) {
    
    return(

        <div className="containerCard">
            
            <div>
                <h2>Resumo financeiro</h2>
                
                <div className="containerBtnFiltros">
                    <button id="btnTodos">Todos</button>
                    <button className="botao">Entradas</button>
                    <button className="botao">Despesas</button>
                </div>                
            </div>

            <h3>Você ainda não possui nenhum lançamento</h3>
            
            <SemCard/>
            <SemCard/>
            <SemCard/>

        </div>
    )
    
}

export default CardsVazios