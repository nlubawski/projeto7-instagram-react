import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import FundoMobile from './FundoMobile'
import Corpo from './Corpo'

function renderizarTudo(){
    return(
        <div>
        <Navbar />
        <Corpo />
        <FundoMobile />
    </div>
    )}

const pagina = renderizarTudo()
const elemento = document.querySelector('.root')

ReactDOM.render(pagina, elemento)