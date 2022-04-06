import "./styleIndexPage.css"

function IndexPage({setHome}) {
    
    return(
        
        <div className="containerIndexPage">

            <section className="containerTexto">
                <img src="./logoIndex.png" alt="logo"/>
                <h2>Centralize o controle das suas finanças</h2>
                <h6>de forma rápida e segura</h6>
                <button onClick={() => setHome(false)}>Iniciar</button>
            </section>

            <section className="arteFigma">

                <img src="./bigImg.png" alt="arteFigma"/>

            </section>

        </div>

    )

}

export default IndexPage