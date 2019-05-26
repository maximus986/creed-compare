//Bootstrap
import 'bootstrap';

// jQuery plugins
import { Range } from './Range';
import { Select } from './Select';

import 'jquery-typeahead/dist/jquery.typeahead.min.css';
import 'jquery-typeahead/dist/jquery.typeahead.min.js';
//SASS
import '../sass/style.scss';

// Font Awesome

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

//Import background images used with inline style so that can be build ind dist/images folder

// Import fonts
import manropeBold from '../fonts/Manrope-Bold.ttf';
import manropeExtraBold from '../fonts/Manrope-ExtraBold.ttf';
import manropeLight from '../fonts/Manrope-Light.ttf';
import manropeMedium from '../fonts/Manrope-Medium.ttf';
import manropeRegular from '../fonts/Manrope-Regular.ttf';
import manropeSemibold from '../fonts/Manrope-Semibold.ttf';
import manropeThin from '../fonts/Manrope-Thin.ttf';

$(document).ready(() => {
  //Targeting DOM elements
  const userDropdownBtn = $('.user-btn');
  const userDropdown = $('.user-dropdown');
  const select = $('.js-select');
  const submitApplicationBtn = $('.btn-theme-active');

  //Toggle user dropdown menu
  userDropdownBtn.click(() => {
    userDropdown.fadeToggle();
  });

  //Select fields
  select.each(function() {
    new Select($(this));
  });

  //Redirect to loader page
  submitApplicationBtn.click(e => {
    window.location.href = '../loader.html';
    e.preventDefault();
  });

  // if ((window.location.href = '../loader.html')) {
  //   setTimeout(() => {
  //     window.location.href = '../offers.html';
  //   }, 3000);
  // }

  //Search patients
});
