const carregarDados = async() => {
   await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(data => preencherSelectestados(data))
        .catch(err => console.error(err));
}

const preencherSelectestados = async(data) =>{
    
    const select = document.getElementById("estados");

    limparSelectEstados();

    for(let uf of data) {
       //const {id, mome, sigla} = data[index]
       //const nome = uf.nome;
       //const sigla = uf.sigla;

       const {id, nome, sigla} = uf;
       const option = document.createElement("option")
       option.value = id;
       option.innerHTML = nome;

       select.appendChild(option)

    }
    console.log(data)

}

const limparSelectEstados = async() => {
    const select = document.getElementById("estados");
        
    while(select.length > 1){
        select.remove(1);
    }
} 

const carregarCidades = async() => {
    const select_estados = document.getElementById("estados");

    const esdados_index = select_estados.selectedIndex;

    const estado_id = select_estados.options[estados_index].value;

    if(estado_id == ""){
        return;
    }

    const url_municipios = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`

    await fetch(url_municipios)
    .then(res => response.json())
    .then(data => preencherSelectestados(data))


}