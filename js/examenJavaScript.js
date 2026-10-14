  
        let num = 10;
        let resultado;

        if (num % 2 === 0) {
            resultado = "Par";
        } else {
            resultado = "Impar";
        }
        console.log(resultado)


        let x = 3;
        let y = 4;

        function sumaCuadrado(a, b) {
            return a * a + b * b;
        }

        let result = sumaCuadrado(x,y);

        console.log(result)

        let test = typeof "Hello world";
        console.log(test)
    
        let edadExamen =17;
        let esAdulto = edadExamen >= 18;
        console.log(esAdulto)

        let nameTest = "Pablo";
        let edadTest = 25;

        let message = "Hola" + nameTest;
        console.log(typeof(message))

        let user = {
            name1: "Pablo",
            edad1: 30,
            activo: true
        };

        let estadoUser = user.activo;
        console.log(typeof(estadoUser))