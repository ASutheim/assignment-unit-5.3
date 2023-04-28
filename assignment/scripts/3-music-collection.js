console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newestAlbum = { title, artist, yearPublished };
  collection.push(newestAlbum);
  return newestAlbum;
}

/* The code above creates an object 'newAlbum' with the properties of title, artist, and year published, 
and adds this object to the end of the array 'collection */

addToCollection("Candide", "Leonard Bernstein", "1956");
addToCollection("A Night at the Opera", "Queen", "1975");
addToCollection("Coconut Oil", "Lizzo", "2016");
addToCollection("A Badly Broken Code", "Dessa", "2010");
addToCollection("Le Fil", "Camille", "2005");
addToCollection("Cabaret Songs", "Malena Ernman", "2001");

console.log(collection);

/*the code above tests the addToCollection function*/
