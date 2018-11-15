axios.get
  ("http://fizal.me/pokeapi/api/v2/name/ho-oh.json")
    .then(function(response){

      console.log(response);

      let hp = response.data.stats[5].base_stat;
      console.log(hp);
      let ability = response.data.abilities[0].ability.name;
      console.log(ability);


});
/*
class pokemon(){
  constructor(name,attack,defense,abilities){
    this.pokeName=name;
    this.pokeAttack=attack;
    this.pokeDefense=defense;
    this.pokeAbilities=abilities;

  }
}
*/
