// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function applies conditions to the users temperature to determine if it is hot or cold outside 
 */
function calculate() {
  // Getting Temperature from user
  let userTemperature =parseFloat(document.getElementById('userTemperature').value)
  let result;

  // Displaying sentence once conditions are applied 
  if (userTemperature < 15) {
    result = "<br>It's Cold Out! Better Bundle Up!";
  } else if (userTemperature > 15){
    result = "<br> Its nice and warm out today! Better wear some sunscreen! "
  } else {
    result = "<br> Invalid Temperature"
  }
  
  // Displaying results 
  document.getElementById('result').innerHTML = result
}