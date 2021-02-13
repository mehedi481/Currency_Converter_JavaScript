console.log("SUCCESS....");

//TODO: Initial value added for BDtk.We have to do calculation for all currency1.Ex: rupee2tk,rupee2rupee,rupee2dollar so on...
function first() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    output.value = 0;
    //This for BDTK
    if (document.getElementById("convert1").value == "bdtk") {
        if (document.getElementById("convert2").value == "bdtk1") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById("convert1").value == "bdtk") {
        if (document.getElementById("convert2").value == "rupee1") {
            output.value = input.value * 0.86;
        }
    } 
    if (document.getElementById("convert1").value == "bdtk") {
        if (document.getElementById("convert2").value == "dollar1") {
            output.value = input.value * 0.0097;
        }
    }
    //TODO: this for rupee
}
