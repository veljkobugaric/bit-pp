"use strict"
function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;

    this.getString = function () {
        return "Student : " + this.name + " Age : " + this.age + " Id : " + this.id;
    };
}

function Subject(name, description) {
    this.name = name;
    this.description = description;

    this.getString = function () {
        return "Subject : " + this.name + " Description : " + this.description;
    };
}

function Classroom(name) {
    this.name = name;
    this.subjects = [];
    this.students = [];

    this.addSubject = function (subject) {
        this.subjects.push(subject);
    };
    this.addStudent = function (student) {
        this.students.push(student);
    };
    this.getString = function () {
        var classroomString = '';
        for (var i = 0; i < this.subjects.length; i++) {
            classroomString += this.subjects[i].getString() + '\n\t';
        }
        for (var i = 0; i < this.students.length; i++) {
            classroomString += this.students[i].getString() + '\n\t';
        }
        return "Classroom : " + this.name + "\n\t" + classroomString;
    }
}

var veljko = new Student("Veljko", 22, "008");
var stefan = new Student("Stefan", 25, "008");

var pp = new Subject("Programming Principles", "easy");

var bit008 = new Classroom("BIT 08");

bit008.addStudent(veljko);
bit008.addStudent(stefan);

bit008.addSubject(pp);

console.log(bit008.getString());

