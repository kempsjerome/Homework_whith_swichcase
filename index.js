
total= 0;

function additionner() {
    let fruit = document.getElementById("Fruit").value; 
    
    
    switch (fruit) {
        case "Orange":
            total += 5
            alert("Vous avez choisi une Orange le prix total est" + total);
            break;
        case "Mangue":
            total += 10
            alert("Vous avez choisi une mangue le prix total est" + total);
            break;
        case "Citron":
            total += 20
            alert("Vous avez choisi une Cittro le prix total est" + total);
            break;
        default:
            alert("Sélectionnez d'abord un fruit.");
    }
}

 function finaliser(){
    alert("le prix des achats est"+ total + "us")

 }