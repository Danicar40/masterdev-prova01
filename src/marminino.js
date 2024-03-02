function executar(numero) {
   let palavra = '';
   
   if(numero % 3 === 0) {
    palavra += 'Mar';
    }

   if(numero % 4 === 0) {
    palavra += 'Minino';
    }

    return palavra;

}   

for(let i = 1; i <= 100; i++) {
    let resultado = executar (i);
    console.log({i, resultado})
}

module.exports = executar;