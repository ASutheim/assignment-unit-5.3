console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = { title, artist, yearPublished };
  collection.push(album);
  return album;
}

/* The code above creates an object 'newAlbum' with the properties of title, artist, and year published, 
and adds this object to the end of the array 'collection */

addToCollection("Candide", "Leonard Bernstein", "1956");
console.log(addToCollection("Candide", "Leonard Bernstein", "1956"));

addToCollection("A Night at the Opera", "Queen", "1975");
console.log(addToCollection("A Night at the Opera", "Queen", "1975"));

addToCollection("Coconut Oil", "Lizzo", "2016");
console.log(addToCollection("Coconut Oil", "Lizzo", "2016"));

addToCollection("A Badly Broken Code", "Dessa", "2010");
console.log(addToCollection("A Badly Broken Code", "Dessa", "2010"));

addToCollection("Le Fil", "Camille", "2005");
console.log(addToCollection("Le Fil", "Camille", "2005"));

addToCollection("Cabaret Songs", "Malena Ernman", "2001");
console.log(addToCollection("Cabaret Songs", "Malena Ernman", "2001"));

console.log(collection);

/*the code above tests the addToCollection function by adding six albums*/
