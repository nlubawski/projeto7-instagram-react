export default function Sugestoes(){
    const sugestao = [
        {img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao:"Segue você" },
        {img: "assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
        {img: "assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
        {img: "assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"},
        ]
    return (
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            {sugestao.map(item => 
                <div class="sugestao">
                    <div class="usuario">
                        <img src={item.img} />
                    <div class="texto">
                    <div class="nome">{item.nome}</div>
                    <div class="razao">{item.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
            </div>
            
            )}
        </div>
    )
}