import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times=[
    {
      nome: 'Fortnite',
      imagemCabecalho : 'https://cdn2.unrealengine.com/fortnite-battle-royale-chapter-4-season-1-1900x600-0f05110a4bf7.jpg',
      corPrimaria: '#57c278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Lol',
      imagemCabecalho : 'https://images4.alphacoders.com/131/1315492.jpg',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Call of Duty',
      imagemCabecalho : 'https://images.alphacoders.com/593/593330.jpg',
      corPrimaria: '#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Valorant',
      imagemCabecalho : 'https://images3.alphacoders.com/130/1304305.jpeg',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Free Fire',
      imagemCabecalho : 'https://images5.alphacoders.com/108/1088660.jpg',
      corPrimaria: '#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome: 'Minecraft',
      imagemCabecalho : 'https://images8.alphacoders.com/479/479393.jpg',
      corPrimaria: '#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'GTA V',
      imagemCabecalho : 'https://images4.alphacoders.com/587/587526.jpg',
      corPrimaria: '#FF8A29',
      corSecundaria:'#FFEEDF'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time =>  <Time key={time.nome} nome={time.nome} 
                                corPrimaria={time.corPrimaria}
                                corSecundaria={time.corSecundaria}
                                imagemCabecalho={time.imagemCabecalho}
                                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}     
      <Rodape/>                      
         
    </div>
  );
}

export default App;
