const resultado = [];
const numeroInput = document.getElementById("input_number");
function registrar(){
    const num = parseInt(numeroInput.value);
    calcularSucesion(num);   
    numeroInput.value ='';
}

function calcularSucesion(num){
    let serie = [];
    if(num>=0 && num<30){
        if (num == 0){
            serie.push(0);
        }else if(num ==1){
            serie.push(0,1);
        }else{
            let num1= 0;
            let num2= 1;
            serie.push(num1,num2);
            for(let i= 2; i<num; i++){
                let temp = num1 + num2;
                num1 = num2;
                num2 = temp;
                serie.push(temp)
            }
        }
        resultado.push(...serie);
        imprimirSucesion(num,serie);
    }else{
        alert('Ingresa un número entre 0 y 30. Intenta de nuevo');
    }    
}

function imprimirSucesion(num, serie){
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "Serie Fibonacci de " + num +": " + serie;
}

numeroInput.addEventListener("keyup", function(event){

    if(event.key === 'Enter' && numeroInput.value !==''){
        registrar();
    }
});