function avisar(){
    let menuwp = document.getElementById('menuimg');
    let itemenu = document.getElementById('itensmenu')
    if(menuwp.style.transform == 'rotate(360deg)')
    {
        menuwp.style.transform = 'rotate(180deg)'
        itemenu.style.width = '0vw'
        
    } else{
        menuwp.style.transform = 'rotate(360deg)'
        itemenu.style.width = '20vw'

    }
   
   
}

function conteinerproduct(){
    let vizpro = document.getElementById('conteiner-product') 
    if(vizpro.style.display == "block"){
        vizpro.style.display = "none"
    }else{
        vizpro.style.display = "block"
    }

}
