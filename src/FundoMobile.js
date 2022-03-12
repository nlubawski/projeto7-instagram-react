export default function FundoMobile(){
    const nomes = ["home", "search-outline", "add-circle-outline",
    "heart-outline", "person-outline"]
    return(
        <div class="fundo-mobile">
        {nomes.map(item => <ion-icon name={item}></ion-icon>
        )}
        </div>
        )
}