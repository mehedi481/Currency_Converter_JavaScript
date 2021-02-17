console.log("SUCCESS....");

function first() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    output.value = 0;
    //This for USDs
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 2.03032;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 1.01941;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "EUR2") {
            output.value = input.value * 1.41544;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "AUD2") {
            output.value = input.value * 0.88297;
        }
    }

    //This for GBPs
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 0.49246;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 0.50221;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "EUR2") {
            output.value = input.value * 0.69714;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "AUD2") {
            output.value = input.value * 0.43497;
        }
    }
    //This for CADs
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 0.98054;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 1.99169;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "EUR2") {
            output.value = input.value * 1.38814;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "AUD2") {
            output.value = input.value * 0.86613;
        }
    }
    //This for EURs
    if (document.getElementById('convert1').value == "EUR1") {
        if (document.getElementById("convert2").value == "EUR2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "EUR1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 0.70641;
        }
    }
    if (document.getElementById('convert1').value == "EUR1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 1.43448;
        }
    }
    if (document.getElementById('convert1').value == "EUR1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 0.72037;
        }
    }
    if (document.getElementById('convert1').value == "EUR1") {
        if (document.getElementById("convert2").value == "AUD2") {
            output.value = input.value * 0.62382;
        }
    }
    //This for 
    if (document.getElementById('convert1').value == "AUD1") {
        if (document.getElementById("convert2").value == "AUD2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "AUD1") {
        if (document.getElementById("convert2").value == "EUR2") {
            output.value = input.value * 1.60329;
        }
    }
    if (document.getElementById('convert1').value == "AUD1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 1.15498;
        }
    }
    if (document.getElementById('convert1').value == "AUD1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 2.29964;
        }
    }
    if (document.getElementById('convert1').value == "AUD1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 1.13262;
        }
    }
}
