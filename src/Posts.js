export default function Posts(){
    const postagens = [{img:"assets/img/meowed.svg", nome:"meowed", conteudoImg:"assets/img/gato-telefone.svg",
curtidasImg: "assets/img/respondeai.svg", curtidasTexto: "respondeai", curtidasNum: 101.523  },
{img:"assets/img/barked.svg", nome:"barked", conteudoImg:"assets/img/dog.svg",
curtidasImg: "assets/img/adorable_animals.svg", curtidasTexto: "adorable_animals", curtidasNum: 99.159  }]
    return(
        <div class="posts">
        {postagens.map(item =>
            <div class="post">
                <div class="topo">
                        <div class="usuario">
                        <img src={item.img} />
                            {item.nome}
                        </div>
                        <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                </div>

                <div class="conteudo">
                        <img src={item.conteudoImg} />
                </div>

                <div class="fundo">
                        <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        </div>

                        <div class="curtidas">
                        <img src= {item.curtidasImg}/>
                        <div class="texto">
                            Curtido por <strong>{item.curtidasTexto}</strong> e <strong>outras {item.curtidasNum} pessoas</strong>
                        </div>
                        </div>
                </div>
            </div>
        )}
        </div>
    )
}