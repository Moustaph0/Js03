export const codeloccol = {
    "name":"Coder",
    "legs":4,
    "tails":1,
    "friends":"[ 'Codeloccol Campers' ]", 
}
codeloccol.name = "'Happy Coder'";

const affiche = function() {
    console.log("{\n   name:", codeloccol.name+",");
    console.log("   legs:", codeloccol.legs+",");
    console.log("   tails:", codeloccol.tails+",");
    console.log("   friends:", codeloccol.friends, "\n}");
}
affiche();