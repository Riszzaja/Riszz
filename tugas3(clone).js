function light(sw, imageId) { 
    const date = new Date(); 
    const hour = date.getHours(); 
    const minute = date.getMinutes(); 
    const second = date.getSeconds(); 
    let pic, textStatus, jamStatus; 
 
    const formattedTime = `${hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`; 
 
    if (sw == 1) { 
      pic = "https://www.w3schools.com/js/pic_bulbon.gif"; 
      textStatus = "Lampu Menyala"; 
      jamStatus = `Menyala: ${formattedTime}`; 
    } else { 
      pic = "https://www.w3schools.com/js/pic_bulboff.gif"; 
      textStatus = "Lampu Mati"; 
      jamStatus = `Mati: ${formattedTime}`; 
    } 
 
    document.getElementById(imageId).src = pic; 
 
    document.getElementById(`text${imageId === "myImage1" ? "1" : "2"}`).innerHTML = textStatus; 
    document.getElementById(`jam${imageId === "myImage1" ? "1" : "2"}`).innerHTML = jamStatus; 
} 
 
function toggleLampu1() { 
    light(1, 'myImage1'); 
    setTimeout(function() { 
        light(0, 'myImage1'); 
    }, 3000); 
} 
 
 
//GuessNumber 
const correctNumber = Math.floor(Math.random()*10 + 1); 
 
    function checkGuess() { 
        const userGuess = parseInt(document.getElementById("guessInput").value); 
        const resultDiv = document.getElementById("result"); 
 
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) { 
            resultDiv.textContent = "Silakan masukkan nomor yang valid antara 1 dan 10"; 
        } else if (userGuess === correctNumber) { 
            resultDiv.textContent = "Selamat anda menebak angka yang benar" + correctNumber; 
        } else { 
            resultDiv.textContent = "Tebakkan Salah, Coba lagi"; 
        } 
    } 
 
//Calculator 
function calculate() {  
    const num1 = parseFloat(document.getElementById("num1").value);  
    const num2 = parseFloat(document.getElementById("num2").value);  
    const operation = document.getElementById("operation").value;  
    let result;  
 
    if (isNaN(num1) || isNaN(num2)) {  
        result = "Masukkan angka yang valid";  
    } else {  
        switch (operation) {  
            case "add":  
                result = num1 + num2;  
                break;  
            case "subtract":  
                result = num1 - num2;  
                break;  
            case "multiply":  
                result = num1 * num2;  
                break;  
            case "divide":  
                result = num2 !== 0 ? num1 / num2 : "Tidak bisa dibagi nol";  
                break;  
            default:  
                result = "Operasi tidak valid";  
                break;  
        }  
    }  
 
    document.getElementById("resultCalculator").textContent = result;  
} 
//checkUmur 
function checkUmur() { 
    const umur = parseInt(document.getElementById("umur").value); 
    const resultDiv = document.getElementById("resultUmur");  
 
    if (isNaN(umur)) { 
        resultDiv.textContent = "Silakan masukkan angka yang valid."; 
        return; 
    } 
 
    let kategori; 
 
    if (umur >= 0 && umur <= 12) { 
        kategori = "Anak-anak"; 
    } else if (umur >= 13 && umur <= 17) { 
        kategori = "Remaja"; 
    } else if (umur >= 18) { 
        kategori = "Dewasa"; 
    } else { 
        kategori = "Umur tidak valid."; 
    } 
 
    resultDiv.textContent = `Umur ${umur} = ${kategori}`; 
} 
 
// temperature 
function convertTemperature() { 
    const inputTemp = parseFloat(document.getElementById("inputTemperature").value); 
    const conversionType = document.getElementById("conversionType").value; 
    let result; 
 
    // Debugging: Cek input yang dimasukkan 
    console.log("Input Temperature:", inputTemp); 
    console.log("Conversion Type:", conversionType); 
 
    if (isNaN(inputTemp)) { 
        result = "Silakan masukkan suhu yang valid."; 
    } else { 
        switch (conversionType) { 
            case "CtoF": 
                result = `${inputTemp}C = ${(inputTemp * 9/5 + 32).toFixed(2)}F`; 
                break; 
            case "CtoK": 
                result = `${inputTemp}C = ${(inputTemp +273.15).toFixed(2)}K`; 
                break; 
            case "FtoC": 
                result = `${inputTemp}F = ${((inputTemp - 32) * 5/9).toFixed(2)}C`; 
                break; 
            case "FtoK": 
                result = `${inputTemp}F = ${((inputTemp - 32) * 5/9 + 273.15).toFixed(2)}K`; 
                break; 
            case "KtoC": 
                result = `${inputTemp}K = ${(inputTemp - 273.15).toFixed(2)}C`; 
                break; 
            case "KtoF": 
                result = `${inputTemp}K = ${((inputTemp - 273.15) * 9/5 + 32).toFixed(2)}°F`; 
                break; 
            default: 
                result = "Jenis konversi tidak valid."; 
        } 
    } 
 
    // Debugging: Cek hasil konversi sebelum ditampilkan 
    console.log("Conversion Result:", result); 
 
    document.getElementById("resultTemperature").textContent = result; 
}