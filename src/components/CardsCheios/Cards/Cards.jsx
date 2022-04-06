import './styleCard.css'

function Cards({listTransactions, setListTransactions}) {
    
    function excluir(itemExcluir) {
        const filtro = listTransactions.filter((item) => {
            return item !== itemExcluir
        })
        setListTransactions(filtro)
    }

    return(
        <ul>
            {listTransactions.map((item, index) =>{
                return(
                    <li key={index} className={
                        item.type === 'entrada' ?
                        'entrada'
                        :
                        'saida' 
                    }>
                        <div className='nomeDesc'>
                            <h3 className='descricao'>{item.description}</h3>
                            <h6 className='type'>{item.type}</h6>
                        </div>
                        <h6>R$ {item.value}</h6>
                        <button className='btnExcluir' onClick={() => excluir(item)}>
                            <img src='./trash.png' alt='imgLixo'/>
                        </button>
                    </li>
                )
            })}
        </ul>

    )
}

export default Cards