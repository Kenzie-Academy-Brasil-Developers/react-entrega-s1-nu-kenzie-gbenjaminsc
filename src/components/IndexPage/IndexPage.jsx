import "./styleIndexPage.css"

function IndexPage({setHome}) {
    
    return(
        
        <div className="containerIndexPage">

            <section>
                <img src="./assets/logoIndex.png" alt="logo"/>
                <h2>Centralize o controle das suas finanças</h2>
                <h6>de forma rápida e segura</h6>
                <button onClick={() => setHome(false)}>Iniciar</button>
            </section>

            <section className="arteFigma">

                {/*colocar img descobrir como importar grupo*/}

            </section>

        </div>

    )

}

export default IndexPage