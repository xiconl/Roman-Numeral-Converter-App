const form = document.getElementById('form');
const numberOutput = document.getElementById('output');
const convertButton = document.getElementById('convert-btn');

//This function will be called when the form is submitted
// I made chages to the base, it should have been this( ["M", 1000] ), not this( ["M, 1000"] )
const convertToRoman = num => {
    const base = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]


    const roman = [];
    base.forEach(function(arr) {
        while (num >= arr[1]) {
            roman.push(arr[0]);
            num -= arr[1];
        }
    })
    return roman.join('');
};


// no changes made
const isNumber = (str, int) => {
    let errMsg = " ";
    if(!str || str.match(/[e.]/g)){
        errMsg = "Please enter a number";
    } else if(int <1){
        errMsg = "Please enter a number greater than or equal to 1";
    } else if (int >= 4000){
        errMsg = "Please enter a number less than 4000";
    } else {
        return true;
    }
    numberOutput.innerText = errMsg;
    numberOutput.classList.add("alert");
    return false;
};

// no changes made
const wipeAlert = () => {
    numberOutput.innerText = "";
    numberOutput.classList.remove("alert");
};

// I changed the "ariaValueMax" to "value"
const UIUpdate = () => {
    const numStr = document.getElementById("number").value;
    const int = parseInt(numStr, 10);
    numberOutput.classList.remove("hidden");
        wipeAlert();
        if(isNumber(numStr, int)){
            numberOutput.innerText = convertToRoman(int);
        }
};


// no changes made
form.addEventListener("submit", e => {
    e.preventDefault();
    UIUpdate();
    }
);


// i added parantheses "( )" to the UIUpdate
convertButton.addEventListener("click", () => {
    UIUpdate();
    }
);




// const 