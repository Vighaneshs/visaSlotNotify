function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const token = ""; //Token for the Bot
const chat_id = 0; //This should be the chat id


let vacRegex = /VAC/;

async function funfun(){
    // await sleep(5);
    document.querySelector(".refresh-slots").click();
    await sleep(500);
    var table = document.getElementsByClassName('table ')[0].childNodes[0].childNodes;
    var ntr = table.length;
    var i = 0;
    for(i = 0; i < ntr; i++){
        if ((vacRegex.exec(table[i].childNodes[0].innerHTML)
            && table[i].childNodes[0].innerHTML != "MUMBAI VAC"
            && Number(table[i].childNodes[1].childNodes[0].innerText) >= 3)
            || (table[i].childNodes[0].innerHTML == "MUMBAI VAC" && Number(table[i].childNodes[1].childNodes[0].innerText) >= 59)){
                    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`
                    var furl = url.concat(table[i].childNodes[0].innerHTML)
                    fetch(furl)
                        .then(response => response.json())
                        .then(response => console.log(response))
                        .catch(err => console.error(err));
           }
    }
}
setInterval(funfun, 120000);
