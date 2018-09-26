    let count = 6;

    function check(luckyNumbers) {
        let userNumbers = [];
        for (let i = 0; i < count; i++) {
            let outcome = document.getElementById("outcome-" + i);
            // let predict = document.getElementById("predict-" + i).value;
            userNumbers[i] = document.getElementById("predict-" + i).value;
            if (userNumbers.length === 6) {
                console.log(userNumbers);
            }
            if (userNumbers[i] === luckyNumbers[i]) {
                document.getElementById("outcome-" + i).style.color = "green";
                console.log("Match found at: " + i)
            } else {
                document.getElementById("outcome-" + i).style.color = "black";
            }
        }
        return;
    };

    function random() {
        let lottoMax = document.getElementById("max");
        let lottoCount = document.getElementById("count");
        let rangeEnd = 49;

        document.getElementsByName("userPredict").max = rangeEnd;
        // if (lottoCount.value == "")
        // {
        // let count = 6;
        // }
        // else
        // {
        // let count = lottoCount.value;
        // }
        // if (lottoMax.value == "")
        // {
        //     let max = 49;
        // }
        // else
        // {
        //     let max = lottoMax.value;
        // }
        // lottoMax.style.color = "green";

        let range = [1, rangeEnd];
        let luckyNumbers = [];

        for (let i = 0; i < count; i++) {
            let randomNumber = Math.floor(Math.random() * range[1]) + range[0];
            luckyNumbers.push(randomNumber);

            document.getElementById("outcome-" + i).innerHTML = luckyNumbers[i];
        }

        console.log(luckyNumbers)

        let userNumbers = [];
        for (let i = 0; i < count; i++) {
            let outcome = document.getElementById("outcome-" + i);
            // let predict = document.getElementById("predict-" + i).value;
            userNumbers[i] = document.getElementById("predict-" + i).value;

            console.log(userNumbers[i] == luckyNumbers[i]);

            if (userNumbers[i] == luckyNumbers[i]) {
                document.getElementById("outcome-" + i).style.color = "green";
                console.log("Match found at: " + i)
            } else {
                document.getElementById("outcome-" + i).style.color = "black";
            }
        }
        console.log(userNumbers);
    }

    function autorun() {
        random();

    }
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
    else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
    else window.onload = autorun;