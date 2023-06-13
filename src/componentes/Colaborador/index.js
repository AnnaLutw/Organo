import './Colaborador.css'

const Colaborador = ({nome, imagem, idade, imagemCabecalho, experiencia}) =>{

    var idadeEscrita = `${idade} anos`
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundImage : `url(${imagemCabecalho})`}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{idadeEscrita}</h5>
                <h5>{experiencia}</h5>
            </div>
        </div>
    )
}
export default Colaborador