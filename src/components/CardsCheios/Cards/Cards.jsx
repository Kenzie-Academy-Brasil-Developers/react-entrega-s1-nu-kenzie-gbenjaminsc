import './styleCard.css'

function Cards({listTransactions, setListTransactions, listTransactionsOfc}) {
    
    function excluir(event) {
        const filtro = listTransactionsOfc.filter((item) => {
            console.log(typeof item.id, typeof event.target.value)
            return +item.id != +event.target.value
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
                        <button className='btnExcluir' value={item.id} onClick={excluir}></button>
                    </li>
                )
            })}
        </ul>

    )
}

export default Cards