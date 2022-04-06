import SemCard from "./SemCard/SemCard"
import './styleCardVazios.css'

function CardsVazios(props) {
    
    return(

        <div className="containerCard">
            
            <div className="filtros">
                <h2>Resumo financeiro</h2>
                
                <div className="containerBtnFiltros">
                    <button className="botao">Todos</button>
                    <button className="botao">Entradas</button>
                    <button className="botao">Despesas</button>
                </div>                
            </div>

            <h3>Você ainda não possui nenhum lançamento</h3>
            <div className="semCard">
                <SemCard/>
                <SemCard/>
                <SemCard/>
            </div>

        </div>
    )
    
}

export default CardsVazios