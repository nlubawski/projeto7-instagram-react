import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import FundoMobile from './FundoMobile'
import Corpo from './Corpo'

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )}

const pagina = App()
const elemento = document.querySelector('.root')

ReactDOM.render(pagina, elemento)