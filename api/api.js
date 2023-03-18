
const aa = document.getElementById("a")
function advice() {
    x = Math.floor(Math.random() * 225);
    y = "https://api.adviceslip.com/advice/";
    z = `${y}${x}`
    console.log(z)
    fetch(z)
        .then(response => response.json())
        .then(json => {

            console.log(json)
            //tạo một cái list item
            const listItem = document.createElement('li');
            listItem.innerHTML = json.slip.advice;
            // đưa list item vào thẻ ul           
            const spList = document.getElementById('sp');
            spList.innerHTML=""
            spList.appendChild(listItem);      
        })
        //bắt lỗi khi fetch api THẤT BẠI
        .catch(error => console.error(error));
}
    

    const fetchpokemon = document.getElementById("fetchpoke")

    const pokemonContainer = document.getElementById('pokemon-container');
    var a;
    
    function api() {
        
    a = Math.floor(Math.random() * 1001);
    b = "https://pokeapi.co/api/v2/pokemon/";
    c = `${b}${a}`
    console.log(c)
    fetch(c)
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            var pokemonImage = document.createElement('img'); //tạo thẻ img
            pokemonImage.src = data.sprites.front_default; // ảnh đc truyền vào thẻ img
    
            const pokemonName = document.createElement('h2'); // tạo h2
            pokemonName.textContent = data.name; // nhận tt từ data name của pokemon
            console.log(pokemonName)
            
            pokemonContainer.innerHTML=``
            
            const pokemonTypes = document.createElement('ul'); //tạo ul
            data.types.forEach(type => {
                const pokemonType = document.createElement('li');
                pokemonType.textContent = type.type.name;
                console.log(pokemonType)
                pokemonTypes.appendChild(pokemonType);
                
            });
            
           
            pokemonContainer.appendChild(pokemonName);
            pokemonContainer.appendChild(pokemonImage);           
            pokemonContainer.appendChild(pokemonTypes);
            console.log(pokemonTypes)
            
            //thêm vào html
        })
        .catch(error => console.error(error));
    }

    

