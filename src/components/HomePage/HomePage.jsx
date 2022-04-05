import './styleHomePage.css'
import Form from '../Form/Form'
import CardsVazios from '../CardsVazios/CardVazios'
import CardCheio from '../CardsCheios/CardsCheios'
import TotalMoney from '../TotalMoney/TotalMoney'

function HomePage({setHome , listTransactions, setListTransactions}) {

    return (
        
        <div>
            <section className='header'>
                <img src="./Nukenzie.png" alt="logo"/>
                <button onClick={() => setHome(true)}>Início</button>
            </section>

            <section className='mainContainer'>
                <div className='containerEsquerda'>
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                    <TotalMoney listTransactions={listTransactions}/>
                </div>

                {listTransactions.length === 0 ? (
                    <CardsVazios/>) : (<CardCheio listTransactions={listTransactions} setListTransactions={setListTransactions}/>)}

            </section>
        </div>

    )

}

export default HomePage