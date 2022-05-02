// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function converts temperature from fahrenheit to celsius 
 */
function convert() {
  // Entering temperature in fahrenheit
  let userTemperature = parseFloat(document.getElementById('userTemperature').value)
  let result;

  // Displaying sentence once converted 
  if (userTemperature < 15) {
    result = "<br>It's Cold Out! Better Bundle Up!";
  } else {
    result = "<br> Its nice and warm out today "
  }
