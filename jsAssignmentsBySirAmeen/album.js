//////// 40 Album

/*  Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.
*/

//simple 

function make_album(artist, title){
  albumDictionary = {
    'artist' : artist,
    'title' : title
  }
  return console.log(albumDictionary) ;
}

make_album('Ruhama', 'The JS developer');
make_album('Fahad', 'The NextJS developer');
make_album('Irma', 'The Frontend developer');

// with Track

function makes_album(artist, title, tracks=0) {
  albumDictionary = {
    'artist': artist,
    'title': title
  }
  if(tracks){
    albumDictionary['tracks'] = tracks;
  }
  return console.log(albumDictionary);
}

makes_album('Ruhama', 'The JS developer');
makes_album('Fahad', 'The NextJS developer', 8);
makes_album('Irma', 'The Frontend developer');





