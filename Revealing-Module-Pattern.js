/**
 * @description {
 * The Revealing Module Pattern is a design pattern in JavaScript used
 *  to encapsulate and organize code within modules. 
 * It provides a way to create private variables and functions,
 *  as well as a mechanism to reveal only the necessary parts of 
 * the module to the outside world. This pattern promotes encapsulation,
 *  which is a fundamental principle of object-oriented programming, 
 * and helps prevent the pollution of the global namespace.
 * }
 * @example {Singletons: The Revealing Module Pattern is often used to create singletons, 
 * ensuring that there is only one instance of a module throughout the application.
 * }
 */
const musicPlayer = (function () {
  let songs = [];

  const loadSong = (song) => {
    songs.push(song);
    return song;
  };

  const play = () => {
    console.log("song is played ", loadSong("carlos santana, Maria"));
  };
  const next = () => {
    console.log(
      "next song is played",
      loadSong("in the name of God - Dream Theater")
    );
  };
  const deleteSongs = () => {
    songs = [];
  };

  return {
    play,
    next,
    deleteSongs,
  };
})();

musicPlayer.play(); // play song
musicPlayer.next(); //next song
