import { SolarCalc } from './solarSheet.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val().toString();
    const smokes = $("#smoker[type='radio'][name='smoker']:checked").val();
    const drinks = $("#drinker[type='radio'][name='drinker']:checked").val();
    const exercises = $("#exercise[type='radio'][name='exercise']:checked").val();
    console.log(exercises)
    const newPerson = new SolarCalc (age, smokes, drinks, exercises)
    newPerson.ageMaker();
    newPerson.smokeAlarm();
    newPerson.boozeCruiser();
    newPerson.stairMaster();
    newPerson.mercuryAge();
    newPerson.venusAge();
    newPerson.marsAge();
    newPerson.jupiterAge();
    const mcDeath = newPerson.mercuryAgeExpect();
    const veNope = newPerson.venusAgeExpect();
    const marsNope = newPerson.marsAgeExpect();
    const jupiDont = newPerson.jupiterAgeExpect();
    $('#result').append("<li>" + `You're ${newPerson.mercury.toFixed()} years old on Mercury.` + "</li>")
    $('#result').append("<li>" + `You would survive for 2 seconds on mercury. You have cheated death for: ${mcDeath} years.` + "</li><br>")
    $('#result').append("<li>" + `You're ${newPerson.venus.toFixed()} years old on Venus.` + "</li>")
    $('#result').append("<li>" + `You would survive for less than one second on Venus. You have cheated death for: ${veNope} years.` + "</li><br>")
    $('#result').append("<li>" + `You're ${newPerson.mars.toFixed()} years old on Mars.` + "</li>")
    $('#result').append("<li>" + `You would survive for 2 seconds on Mars. You have cheated death for: ${marsNope} years.` + "</li><br>")
    $('#result').append("<li>" + `You're ${newPerson.jupiter.toFixed()} years old on Jupiter.` + "</li>")
    $('#result').append("<li>" + `You would survive for less than one second on Jupiter. You have cheated death for: ${jupiDont} years.` + "</li>")
  });
});
