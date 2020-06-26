import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './space-age';

//User Interface Logic

$(document).ready(function() {
  $("#calculate-ages").submit(function(event) {
    event.preventDefault();
    let userName = $("#name").val();
    let userAge = $("#age").val();
    const user = new User(userName, userAge);
    user.ageOnOtherPlanets();
  });
});