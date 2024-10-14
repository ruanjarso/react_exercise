import "./cabecalho.css"

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <h1>
                Título do Site
            </h1>
            <nav>
            <ul>
                <li>HOME</li>
                <li>MORE OPTIONS</li>
                <li>SUPORT</li>
                <li>ABOUT US</li>
            </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;