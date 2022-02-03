// schijf hier tussen je code'
const status = ["Het licht is uit.", "Het licht is aan."];
var counter = 0
button.value = status[1]

function myFunction(){
    if (counter > 1) {counter = 0}
    button.value = status[counter]
    
    if (counter == 0) {
        document.getElementById("kleur").classList.toggle('geel');
        document.getElementById("kleur").classList.toggle('zwart');
                console.log(status[0])
        }
            

    else    {
        document.getElementById("kleur").classList.toggle('geel');
        document.getElementById("kleur").classList.toggle('zwart');
            console.log(status[1])
        }
    

    counter += 1    

};   
// schijf hier tussen je code