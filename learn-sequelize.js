const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
function insertNewGenre() {
	return Genre.create({ id: 4, name: "Sci-Fi" });
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
function insertNewMovie() {
	return Movie.create({ title: "Pokemon" });
}

/*
  Write a function that returns the title of the movie with ID=2
*/
function getMovieWithId2() {
	return Movie.findByPk(2).then((movie) => movie.get("title"));
}

/*
  Write a function that returns an array of all the actor names
*/
function getAllActors() {
	return Actor.findAll().then((actors) => actors.map((actor) => actor.name));
	// Add code here
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
function getAllMoviesFrom2008() {
	return Movie.findAll({ where: { year: 2008 } }).then((movies) =>
		movies.map((movie) => movie.title)
	);
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
function deleteGenreYouAdded() {
	Genre.destroy({ where: { name: "Sci-Fi" } });
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
function associateRosarioToEagleEye() {
	// Add code here
	let actorPromise = Actor.findOne({ where: { name: "Rosario Dawson" } });
	let moviePromise = Movie.findOne({ where: { title: "Eagle Eye" } });
	return Promise.all([actorPromise, moviePromise]).then(([actor, movie]) => {
		return actor.addMovie(movie);
	});
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
	let actor = await Actor.findOne({ where: { name: "Robert Downey Jr." } });
	let movie = await Movie.findOne({ where: { title: "Tropic Thunder" } });
	return actor.addMovie(movie);
}

module.exports = {
	insertNewGenre,
	insertNewMovie,
	getMovieWithId2,
	getAllActors,
	getAllMoviesFrom2008,
	deleteGenreYouAdded,
	associateRosarioToEagleEye,
	associateRobertToTropicThunder,
};
