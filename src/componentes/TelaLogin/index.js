import CampoTexto from "../CampoTexto/index.js";
import "./TelaLogin.css"
 import Botao from "../Botao/index.js"


const TelaLogin = () => {
    return(

            
        <section className="tela_login">

            

            <div className="esquerda">
                <img src='/imagens/figuras.png'alt="foto"/>
            </div>

            <hr/>

            <div className="direita">
                <h1>LOGIN</h1>
                <div className="campos">
                    <CampoTexto
                    obrigatorio={true}
                    label="Usuário"
                    placeholder="digite seu usuário"
                    />
                    <CampoTexto
                    obrigatorio={true}
                    label="Usuário"
                    placeholder="digite seu usuário"
                    />
                </div>
                <Botao>ENTRAR</Botao>
            </div>
        </section>
    )
}

export default TelaLogin;
