
const consultarCep = () => {
    console.log('chamou a api');
    const cep = document.getElementById('cep').value

    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)


            document.getElementById('Logradouro').value = json.address
            document.getElementById('Logradouro').value = json.address
        })
}

