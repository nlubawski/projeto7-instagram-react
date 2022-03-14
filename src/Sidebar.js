import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar(){
    
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copright />      
        </div>
    )
}

function Links(){
    return (
        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>

    )
}

function Copright(){
    return (

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}