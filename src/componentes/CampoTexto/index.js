import "./CampoTexto.css"

const CampoTexto = (props) => {
    return(
       <div className="campoTexto" >
        <label>{props.label}</label>
        <input placeholder={props.placeholder} type={props.type} required={props.obrigatorio}/>
       </div>
    )
}

export default CampoTexto;