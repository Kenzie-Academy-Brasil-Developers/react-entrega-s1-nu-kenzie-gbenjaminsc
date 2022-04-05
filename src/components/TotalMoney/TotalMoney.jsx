function TotalMoney({listTransactions}) {

    const total = listTransactions.reduce((valorAtual, acc) => {
        if(acc.type === 'entrada'){
            return parseInt(acc.value) + valorAtual
        }else{
            return valorAtual - parseInt(acc.value)
        }

    },0)

    return(

        <div className="containerTotal">
            <h3>Valor total : {total}</h3>
        </div>
    )
}

export default TotalMoney