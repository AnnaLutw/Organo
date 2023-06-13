import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) =>{
    return(
        props.colaboradores.length > 0 &&<section className='time' style={{ backgroundColor : props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} 
                                                        idade={colaborador.idade} 
                                                        imagem={colaborador.imagem}
                                                        imagemCabecalho={props.imagemCabecalho}
                                                        experiencia={colaborador.experiencia}/>)}
            </div>     
        </section>
    )
}

export default Time;