"use strict";
(function () {

   function Person(name, surname) {
      this.name = name;
      this.surname = surname;

      this.getData = function () {
         return this.name + ' ' + this.surname
      }

   }
   function Seat(number, category) {
      this.number = number;
      this.category = category;

      this.getData = function () {
         return this.number + ' ' + this.category
      }
   }

   function Passenger(person, seat) {

      this.person = person;
      this.seat = seat;

      this.getData = function () {
         return this.person.getData() + ' ' + this.seat.getData() + "\n"

      }

   }
   function Flight(relation, date) {
      this.relation = relation;
      this.date = date;
      this.passengers = [];

      this.addPassenger = function (p) {
         this.passengers.push(p)
      }

      this.getData = function () {
         var resstring = "";
         for (var i = 0; i < this.passengers.length; i++) {
            resstring += this.passengers[i].getData();
         }
         return "date: " + this.date + "\t\n" + "relations: " + this.relation + "   passenger: " + resstring + "\n\n"
      }


   }
   function Airport(name) {
      this.name = name;
      this.flights = [];

      this.addFlight = function (a) {
         this.flights.push(a)
      }
      this.getData = function () {
         var ressflight = "";
         for (var i = 0; i < this.flights.length; i++) {
            ressflight += this.flights[i].getData();
         }
         return "Airport: " + this.name + " \n\n" + ressflight
      }
   }

   var per = new Person("John", "Snow");
   var per2 = new Person("Cersei", "Lanister")
   var per3 = new Person("Veljko", "Bugaric")

   var a1 = new Seat(12, "b");
   var a2 = new Seat(10, "C")
   var a3 = new Seat(5, "c")

   var pass1 = new Passenger(per, a1);
   var pass2 = new Passenger(per2, a2)
   var pass3 = new Passenger(per3, a3)

   var fl = new Flight("Belgrade-Paris", '21.12.2020');
   var fl2 = new Flight("Barcelona-Belgrade", "22.05.2020");

   fl.addPassenger(pass1);
   fl2.addPassenger(pass2)
   fl.addPassenger(pass3)

   var air = new Airport("Nikola Tesla");
   air.addFlight(fl)
   air.addFlight(fl2)

   console.log(air.getData())



})()