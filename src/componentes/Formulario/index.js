import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import './Formulario.css'
const Formulario = (props) =>{
   
    const [nome, setNome] = useState('');
    const [idade, setIdade] =useState('');
    const [imagem, setImagem] =useState('');
    const [time, setTime] =useState('');
    const [experiencia, setExperiencia] =useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome, idade, imagem, time, experiencia})
        setNome('')
        setIdade('')
        setImagem('')
        setTime('')
        setExperiencia('')
    }
     
    return(     
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu time</h2>
                <CampoTexto obrigatorio={true} 
                            label="Nome" 
                            placeholder="Digite seu nome"
                            valor={nome}
                            aoAlterado={valor =>setNome(valor)}/>
                <CampoTexto obrigatorio={true} 
                            label="Idade" 
                            placeholder="Digite sua idade"
                            valor={idade}
                            aoAlterado={valor =>setIdade(valor)}/>
                <CampoTexto obrigatorio={true}
                            label="Foto" 
                            placeholder="Digite o endereço da imagem"
                            valor={imagem}
                            aoAlterado={valor =>setImagem(valor)}/>
                <CampoTexto obrigatorio={true}
                            label="Experiencia " 
                            placeholder="Digite sua experiencia no jogo"
                            valor={experiencia}
                            aoAlterado={valor =>setExperiencia(valor)}/>
                <ListaSuspensa obrigatorio={true} 
                            label="Jogo" 
                            itens={props.times}
                            valor={time}
                            aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}
export default Formulario;