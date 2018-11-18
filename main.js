
class pokemon{
  constructor(name,pokeHealth,pokeAttack,pokeDefense,pokeAbilities,pokePic){
    this.name=name;
    this.pokeHealth=pokeHealth;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;
    this.pokePic=pokePic;

    this.container = document.getElementById('pokeInfo');
    //make a div with classname product
    this.element = document.createElement('div');
    this.element.className = 'product';

  }

display(){

  let name = document.createElement("ol");
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);

  this.container.appendChild(this.element);

  let pokeHealth = document.createElement("ol");
  pokeHealth.innerHTML = "HP: " + this.pokeHealth;
  this.element.appendChild(pokeHealth);

  this.container.appendChild(this.element);

  let pokeAttack = document.createElement("ol");
  pokeAttack.innerHTML = "Attack: " + this.pokeAttack;
  this.element.appendChild(pokeAttack);

  this.container.appendChild(this.element);

  let pokeDefense = document.createElement("ol");
  pokeDefense.innerHTML = "Defense: " + this.pokeDefense;
  this.element.appendChild(pokeDefense);

  this.container.appendChild(this.element);

  let pokeAbilities = document.createElement("ol");
  pokeAbilities.innerHTML = "Ability: " + this.pokeAbilities;
  this.element.appendChild(pokeAbilities);

  this.container.appendChild(this.element);

  let pokePic = document.getElementById("imgHolder");
  pokePic.src = this.pokePic;
  this.element.appendChild(pokePic);

  this.container.appendChild(this.element);

}
}


//******************************************API CALL FOR HO-OH********************************
let name,hp,ability,attack,defense,pic;

function ho_Oh(){
axios.get
  ("http://fizal.me/pokeapi/api/v2/name/ho-oh.json")
    .then(function(response){

      let name="Ho-oh";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Ho-oh.gif";

      let hooh = new pokemon(name, hp, attack, defense, ability,pic);
      hooh.display();

});
}

//******************************************API CALL FOR LUGIA***********************

function lu(){
axios.get
  ("http://fizal.me/pokeapi/api/v2/name/lugia.json")
    .then(function(response){

      let name = "Lugia";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Lugia_Shiny.gif";


      let lugia = new pokemon(name,hp,attack,defense,ability,pic);
      lugia.display();


});
}

//***********************************API CALL FOR Rayquaza********************************
function ray(){
axios.get
  ("http://fizal.me/pokeapi/api/v2/name/rayquaza.json")
    .then(function(response){

      let name="Rayquaza";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic= "Rayquaza.gif";

      let rayquaza = new pokemon(name,hp,attack,defense,ability,pic);
      rayquaza.display();

});
}

// Below are click events to display objects ********************************

let hoOh_Clicker = document.getElementById("pokeBall1");
hoOh_Clicker.addEventListener('click',ho_Oh);

let lugia_Clicker = document.getElementById("pokeBall3");
lugia_Clicker.addEventListener('click',lu);

let ray_Clicker = document.getElementById("pokeBall6");
ray_Clicker.addEventListener('click',ray);
