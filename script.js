
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

/*const fetchEstados = () => { 

    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados${estados}`)
    .then(response => response.json())
    .then(json=>(){
        console.log(json)

        document.getElementById('Localidade')

    })
}

fetcheEstados()*/

fetchEstados()

const fetchMunicipios = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios')
    .then(response => response.json())
    .then(json=>(){
        console.log(json)

        let options = ''

        json.forEach = (municipio)

    })

}
