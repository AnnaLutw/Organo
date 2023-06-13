import './Rodape.css'

const Rodape = ()=>{
    return(
        <footer className='footer'>
            <div className='redesSociais'>
                <img src='/imagens/fb.png'></img>
                <img src='/imagens/tw.png'></img>
                <img src='/imagens/ig.png'></img>
            </div>
            <div>
                <img src='/imagens/logo.png'></img>
            </div>
            <div className='escrita'>
                <h4>Desenvolvido por Ana Luiza no curso Alura</h4>
            </div>
            
        </footer>
    )
}

export default Rodape;