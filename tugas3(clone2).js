let animals = ['Kucing', 'Anjing', 'Burung', 'Ikan', 'Kelinci']; 
console.log('Array:', animals); 
 
 
console.log('Hewan Pertama:', animals[0]); 
console.log('Hewan Terakhir:', animals[animals.length - 1]); 
 
 
let numbers = [10, 20, 30, 40,]; 
console.log ('Array:', numbers); 
 
 
numbers.shift(); 
numbers.pop(); 
console.log('Array setelah penghapusan:',"Array", numbers); 
 
 
let colors = ['Merah', 'Biru', 'Hijau']; 
console.log('Array:', colors); 
 
 
colors.unshift('Kuning'); 
colors.push('Ungu'); 
console.log('Array setelah penambahan:','Array:', colors); 
 
 
let sum = 0; 
for (let i = 1; i <= 10; i++) { 
    console.log('Angka:', i); 
    sum += i; 
} 
console.log('Jumlah:', sum); 
 
 
console.log('Angka Genap:'); 
for (let i = 1; i <= 10; i++) { 
    if (i % 2 === 0) { 
        console.log(i); 
    } 
} 
 
 
console.log('Angka Ganjil:'); 
for (let i = 1; i <= 10; i++) { 
    if (i % 2 !== 0) { 
        console.log(i); 
    } 
}