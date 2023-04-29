console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = { title, artist, yearPublished };
  collection.push(album);
  return album;
}

/* The code above creates an object 'newAlbum' with the properties of title, artist, and year published, 
and adds this object to the end of the array 'collection */

console.log(addToCollection("Candide", "Leonard Bernstein", "1956"));

console.log(addToCollection("A Night at the Opera", "Queen", "1975"));

console.log(addToCollection("Coconut Oil", "Lizzo", "2016"));

console.log(addToCollection("A Badly Broken Code", "Dessa", "2010"));

console.log(addToCollection("Le Fil", "Camille", "2005"));

console.log(addToCollection("Cabaret Songs", "Malena Ernman", "2001"));

console.log(collection);

/*the code above tests the addToCollection function by adding six albums*/

function showCollection(array) {
  console.log(array.length);
  for (i = 0; i < array.length; i++) {
    console.log(
      array[i].title,
      "by",
      array[i].artist,
      "published in",
      array[i].yearPublished
    );
  }
}

showCollection(collection);

/*the code above creates and tests the showCollection function*/

function findByArtist(artist) {
  let stuffByThisArtist = [];
  for (i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      stuffByThisArtist.push(collection[i]);
    }
  }
  return stuffByThisArtist;
}

console.log(findByArtist("Lizzo"));
console.log(findByArtist("Picasso"));

/*The code above creates a function findByArtist, which
searches the collection for albums by a certain artist and returns
matching results as an array stuffByThisArtist.*/
