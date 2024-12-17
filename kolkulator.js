'use strick'
// getElementById() JavaScript-dagi funksiyadir va
// u HTML hujjatida id atributi yordamida elementni topish uchun ishlatiladi. 
// Bu funksiya HTML hujjatidagi faqat bitta, noyob idga ega elementni qaytaradi.

function appendValue(value) {
    let b=document.getElementById('result').value
    let a=b.slice(-1)
    if(a!=="+" && a!=="-" && a!=="*" && a!=="/"){
        document.getElementById('result').value += value;
    }
    else{
        if (!isNaN(value)){
            document.getElementById('result').value += value;
        }
        else{
            document.getElementById('result').value = b
        }
    }
}


function calculate(){
    try{const resultField = document.getElementById('result');
    resultField.value = eval(resultField.value);
    }catch{
        alert("Noto'g'ri ifoda");
        clearResult();
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    let a=document.getElementById('result').value //let a=document.getElementById('result').value: Bu yerda kompyuter qog‘ozdan (ekrandagi matn qutisidan) yozilgan so‘zlarni olib, ularga ism beradi (bu ism — a). //
    a=a.slice(0, -1); //a=a.slice(0, -1);: Bu esa "a" nomli qatorning oxirgi harfini kesib tashlaydi. Masalan, agar "ABCD" bo‘lsa, u "ABC" bo‘lib qoladi. //
    document.getElementById('result').value = a; //document.getElementById('result').value = a;: Bu qadamda kompyuter o‘chirib tashlangan qatorni qaytib qog‘ozga (matn qutisiga) yozadi. //
}

document.addEventListener('keydown', function(event) {
    let key = event.key; // Bosilgan tugmaning qiymatini oladi.
    let resultField = document.getElementById('result');
    if (!isNaN(key) || key === '.'){
        appendValue(key);
    }
    
    if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key);
    }
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'Backspace') {
        deleteLastChar();
    }
    if (key === 'Escape') {
        clearResult();
    }
});




