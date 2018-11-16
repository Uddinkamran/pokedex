

class pokemon{
  constructor(name,pokeHealth,pokeAttack,pokeDefense,pokeAbilities){
    this.name=name;
    this.pokeHealth=pokeHealth;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;

    this.container = document.getElementById('products');
    //make a div with classname product
    this.element = document.createElement('div');
    this.element.className = 'product';


  }

display(){

  let name = document.createElement("li");
  name.innerHTML = this.name;
  this.element.appendChild(name);

  this.container.appendChild(this.element);




}
}


//******************************************************************************
let name;

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

      let hooh = new pokemon(name, hp, attack, defense, ability);
      hooh.display();

});

//***********************************************lugia***********************
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


      let lugia = new pokemon(name,hp,attack,defense,ability);


});

//***********************************Rayquaza********************************

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

      let rayquaza = new pokemon(name,hp,attack,defense,ability);



});
