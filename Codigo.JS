<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <script src="xxxxxxxxxx"></script>
</head>

<body>
    <h1>Nunca Desista</h1>
</body>

if (!Number.isInteger(fatorial) || fatorial < 0) {
    return 'Não existe fatorial de um número não natural';
}
 
if (fatorial === 0 || fatorial === 1) {
    return 1;
}
 
var resultado = fatorial;
var primeiroMultipicador = fatorial - 1;
for (var i = primeiroMultipicador; i > 1; i--) {
    resultado *= i;
}
 
return resultado;
