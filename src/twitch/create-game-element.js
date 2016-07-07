// This function should return a new HTML element object
// To represent a game
//
// This function should not modify elements outside of
// the new element that you create and return
//
// The "game" argument will be an object that looks like
// {
//   name: 'StarCraft II',
//   popularity: 2619,
//   _id: 490422,
//   giantbomb_id: 0,
//   box: {
//     large: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-136x190.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-52x72.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   logo: {
//     large: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-240x144.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-120x72.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-60x36.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   _links: {},
// }

export default function (game) {
  // this creates a parent element
  const gameElement = document.createElement('div');
  // this just adds a class name to the parent
  gameElement.classList.add('game-item');

  // this creates an h3 to be used for game title
  const gameName = document.createElement('h3');
  // this adds a class to the h3 we just created
  gameName.classList.add('game-item__name');
  // adds h3 to Parent (div called gameElement)
  gameElement.appendChild(gameName);
  // this grabs the name to put in the h3
  gameName.innerText=game.name;


  //creates a new h4 called gamePop for popularity
  const gamePop = document.createElement('h4');
  // and then adds a class
  gamePop.classList.add('game-item__popularity');
  //adds the new h4 to the first div we created
  gameElement.appendChild(gamePop);
  //grabs popularity to put in the new h4
  gamePop.innerText = game.popularity;

  //creates a new image element called gameCover
  const gameCover= document.createElement('img');
  //gives the image a class name
  gameCover.classList.add('game-item__pic');
  //grabs the image's alt name
  gameCover.alt = game.name;
  //grabs the large image cover
  gameCover.src=game.box.large;
  //adds the new cover the the first div
  gameElement.appendChild(gameCover);





  // console.log(gameElement);
  return gameElement;

}
