"use strict"

var main = (function () {
    console.log("Hi!");

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[name.length - 1].toUpperCase()
        }
    }



    function Movie(title, genre, duration) {
        this.title = title;
        this.genre = genre;
        this.duration = duration;

        this.getData = function () {
            return this.title + ", " + this.duration + "min, " + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;

        this.addMovies = function (a) {
            this.listOfMovies.push(a)
            this.totalNumberOfMovies = this.listOfMovies.length;
        };

        this.getData = function () {
            var res = "";
            var count = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                res += this.listOfMovies[i].getData()
                count += this.listOfMovies[i].duration
            }
            return this.date + ", " + count + "\n " + res
        }

    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMov;
        this.addProgram = function (prog) {
            this.listOfPrograms.push(prog)
        };
        this.getData = function () {
            var ress = "";
            var count = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                ress += this.listOfPrograms[i].getData();
                for (var j = 0; j < this.listOfPrograms[i].listOfMovies.length; j++) {
                    count++;

                }
            }
            return this.name + "\t" + "festival has " + count + "\t" + "movie titles" + "\n " + ress
        }

    }

    var createMovie = function (title, genre, duration) {
        var zanr = new Genre(genre);
        return new Movie(title, zanr, duration);
    }

    var createProgram = function (date) {
        return new Program(date);
    }


    var film = createMovie("The Shawshank Redemption", "Action", 130);
    var progr = createProgram("06.03.2020");

    console.log(film);






    var film = new Movie("The Shawshank Redemption", 130, genre)
    var genre = new Genre("Action");
    var movie = new Movie("The Shawshank Redemption", genre, 130);

    var program = new Program("06.03.2020");
    program.addMovies(movie);

    var festival = new Festival("Fest");
    festival.addProgram(program)

    console.log(festival.getData());






})()