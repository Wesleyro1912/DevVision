import logo from '../assets/logo/logo-horizontal.svg';
import "../css/Menu.css";

function MenuView() {
 return(
    <div>
      
        <div>
            <div className='containerLeft'>
                <img className='logo' src={logo} alt="Logo da DevinDev" />
            </div>

            <div className='containerRight'>
                <nav className='Item'>             
                    <span><a href="#home">Início</a></span>
                    <span><a href="#servicos">Serviços</a></span>
                    <span><a href="#sobre">Sobre</a></span>
                    <span><a href="#contato">Contato</a></span>
                </nav>
            </div>
        </div>
            
      
    </div>
 );
} 

export default MenuView;