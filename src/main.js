
import { SolarCalc } from './solarSheet.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val().toString();//gets users age, converts
    //to a string
    const smokes = $("#smoker[type='radio'][name='smoker']:checked").val();
    const drinks = $("#drinker[type='radio'][name='drinker']:checked").val();
    const exercises = $("#exercise[type='radio'][name='exercise']:checked").val();
                       // $("input[type='radio'][name='rate']:checked").val();
    console.log(exercises)
    const newPerson = new SolarCalc (age, smokes, drinks, exercises)
    newPerson.ageMaker()
    newPerson.smokeAlarm()
    newPerson.boozeCruiser()
    newPerson.stairMaster()
    console.log(newPerson.earthAge)

    console.log(newPerson)
    // var output = pingPong(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
