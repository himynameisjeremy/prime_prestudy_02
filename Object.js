var avengersMovie = {name: "Avengers", runtime: "142 mins", releaseYear: 2012, director: "Joss Whedon"};
var question = false;
while(question == false){
	var needAYes = alert("You want to know about a cool movie?");
	if(confirm("I'm going to give you some info on a movie called the Avengers.")){
		alert(avengersMovie.name + ", " + avengersMovie.runtime + ", " + avengersMovie.releaseYear + ", " + avengersMovie.director);
		question = true;
	}
};
console.log(avengersMovie.name + ", " + avengersMovie.runtime + ", " + avengersMovie.releaseYear + ", " + avengersMovie.director);
