export default function Stories(){
    const info = [{img: "assets/img/9gag.svg", nome:"9gag"},{img: "assets/img/meowed.svg", nome:"meowed"},
    {img: "assets/img/barked.svg", nome:"barked"},{img: "assets/img/nathanwpylestrangeplanet.svg", nome:"nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg", nome:"respondeai"},
    {img: "assets/img/respondeai.svg", nome:"9gag"},{img: "assets/img/filomoderna.svg", nome:" filomoderna"},
    {img: "assets/img/memeriagourmet.svg", nome:"memeriagourmet"}]

    return (
        <div class="stories">

            { info.map(item =>
                <div className="story">
                    <div className="imagem">
                        <img src={item.img} />
                    </div>
                    <div className="usuario">
                        {item.nome}
                    </div>
                </div>
            )}

        <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
}