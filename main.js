
class Pokemon{
  constructor(name,pokeHealth,pokeAttack,pokeDefense,pokeAbilities,pokePic){
    this.name=name;
    this.pokeHealth=pokeHealth;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;
    this.pokePic=pokePic;

    this.container = document.getElementById('pokeInfo');
    //make a div with classname product
    this.element = document.getElementById('dis');
    this.element.className = 'product';

  }

display(){
  //if statement to check if elements have been created
  let name = document.querySelector("ol");
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);

  this.container.appendChild(this.element);

  let pokeHealth = document.querySelector("ol");
  pokeHealth.innerHTML = "HP: " + this.pokeHealth;
  this.element.appendChild(pokeHealth);

  this.container.appendChild(this.element);


  let pokeAttack = document.querySelector("ol");
  pokeAttack.innerHTML = "Attack: " + this.pokeAttack;
  this.element.appendChild(pokeAttack);

  this.container.appendChild(this.element);

  let pokeDefense = document.querySelector("ol");
  pokeDefense.innerHTML = "Defense: " + this.pokeDefense;
  this.element.appendChild(pokeDefense);

  this.container.appendChild(this.element);

  let pokeAbilities = document.querySelector("ol");
  pokeAbilities.innerHTML = "Ability: " + this.pokeAbilities;
  this.element.appendChild(pokeAbilities);

  this.container.appendChild(this.element);

  let pokePic = document.getElementById("imgHolder");
  pokePic.src = this.pokePic;
  this.element.appendChild(pokePic);

  this.container.appendChild(this.element);

}
}

class Trainer{
  constructor(){
    this.pokeData=[];


  }
  all(){
    return this.pokeData;
  }
  add(poke){
    this.pokeData.push(poke);
  }
  get(name){
    for(let i=0;i<this.pokeData.length;i++){
      if(name === this.pokeData[i].name){
      return this.pokeData[i];
    }
    }
  }
}

let Kam = new Trainer();


//******************************************API CALL FOR HO-OH********************************
let name,hp,ability,attack,defense,pic;

function ho_Oh(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/ho-oh.json")
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

      let hooh = new Pokemon(name, hp, attack, defense, ability,pic);
      hooh.display();

});
}

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/ho-oh.json")
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

      let hooh = new Pokemon(name, hp, attack, defense, ability,pic);
      Kam.add(hooh);


});
//******************************************API CALL FOR LUGIA***********************

function lu(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/lugia.json")
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


      let lugia = new Pokemon(name,hp,attack,defense,ability,pic);
      lugia.display();


});
}

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/lugia.json")
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


      let lugia = new Pokemon(name,hp,attack,defense,ability,pic);

      Kam.add(lugia);


});

//***********************************API CALL FOR Rayquaza********************************
function ray(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/rayquaza.json")
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

      let rayquaza = new Pokemon(name,hp,attack,defense,ability,pic);
      rayquaza.display();


});
}

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/rayquaza.json")
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

      let rayquaza = new Pokemon(name,hp,attack,defense,ability,pic);

      Kam.add(rayquaza);


});
//*********************************************Random pokemon*****************
function random1(){
  let name = "???????";

  let hp = "????";

  let ability = "?????";

  let attack= "???????"

  let defense= "????????"

  let pic="rand1.gif";


  let random1 = new Pokemon(name,hp,attack,defense,ability,pic);
  random1.display();


}

function random2(){
  let name = "???????";

  let hp = "????";

  let ability = "?????";

  let attack= "???????"

  let defense= "????????"

  let pic="rand3.gif";


  let random2 = new Pokemon(name,hp,attack,defense,ability,pic);
  random2.display();


}


function random3(){
  let name = "???????";

  let hp = "????";

  let ability = "?????";

  let attack= "???????"

  let defense= "????????"

  let pic="tenor.gif";


  let random3 = new Pokemon(name,hp,attack,defense,ability,pic);
  random3.display();


}
// Below are click events to display objects ********************************


let hoOh_Clicker = document.getElementById("pokeBall1");
hoOh_Clicker.addEventListener('click',ho_Oh);

let rand_1 = document.getElementById("pokeBall2");
rand_1.addEventListener('click',random1);

let lugia_Clicker = document.getElementById("pokeBall3");
lugia_Clicker.addEventListener('click',lu);

let rand_2 = document.getElementById("pokeBall4");
rand_2.addEventListener('click',random2);

let rand_3 = document.getElementById("pokeBall5");
rand_3.addEventListener('click',random3);

let ray_Clicker = document.getElementById("pokeBall6");
ray_Clicker.addEventListener('click',ray);



// step 1- settings then Github Pages
// select master branch then click syn
