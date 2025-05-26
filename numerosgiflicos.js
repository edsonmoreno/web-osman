//leo archivo entrada
const fs = require("fs")
let lista = fs.readFileSync("glifos.txt","utf-8")
//console.log(lista)

//limpieza de la cadena
let cad = lista.replace(/[\r ]/g,"") // quito el carro y espacio vacios por todo el docum
let cadena = []
cadena = cad.split("\n") // separo la lista por saltos de linea 


//leo cadena hasta primer 0 que encuentre y guarda en nuevo vector
let cont=0; nuevo =[]
while(cadena[cont] !== '0')
{
    nuevo[cont] = cadena[cont]
    cont++
}

//Cargando los vectores con simbolos y valores
//let simbolos =    ; valor = [1,5,10,50,100,500,1000]; lista = [];
let simbolos = ['Ξ','Ψ','Φ','Δ','Ω','Λ','Σ']; valor = [1000,500,100,50,10,5,1]; lista = [];
//console.log(simbolos)

let num_separado =[]; num_Solo =[]
//llevo los numeros a enteros
for(let i=0; i<cont; i++)
{   

    if (!isNaN(nuevo[i]))
    {
        let a=parseInt(nuevo[i]) // transformo el numero a entero
        if(a>=1 && a<4000)
        {
            let aux2=0; aux3=0;
            while( a!=0 ) // hago el primer numero a simbolos
            {
                if (a>=valor[aux2])
                {
                    lista[aux3] = simbolos[aux2]
                    a = a - valor[aux2]
                    aux2=0
                    aux3++
                }   
                else
                {
                    aux2++
                }

            }
            let i=0
            for (let i=0;i<lista.length; i++)
            {
                
                if ( lista[i]==lista[i+1] && lista[i]==lista[i+2] && lista[i]==lista[i+3] ) // comparo si 4 elemntos son iguales
                {
                    let figura;
                    for(let k=valor.length; k>0; k--) // recorre el vector simbolo para guardar la figura
                    {
                        if(lista[i]==simbolos[k])
                            figura = simbolos[k-1]
                    }
                    lista[i+1] = figura
                    lista.splice(i+2,2)
                    i = i+1
                }
            
            }
            console.log(lista)


        }
        else
        {
            console.log("numero fuera de rango")
        }
    }
    else
    {
        console.log("no es numero") //escribir No es un numero
    }
}
//console.log(num_separado)
