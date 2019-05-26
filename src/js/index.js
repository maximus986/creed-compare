//Bootstrap
import 'bootstrap';

// jQuery plugins
import { Select } from './Select';

import 'bootstrap4-toggle/css/bootstrap4-toggle.css';
import 'bootstrap4-toggle/js/bootstrap4-toggle.js';
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
  const submitApplicationBtn = $('.see-results');

  //Toggle user dropdown menu
  userDropdownBtn.click(() => {
    userDropdown.fadeToggle();
  });

  //Select fields
  select.each(function() {
    new Select($(this));
  });

  //Enable/disable button

  $('#agreement').change(function() {
    if ($(this).prop('checked')) {
      $('.see-results')
        .removeAttr('disabled')
        .removeClass('btn-theme-dark-disabled');
    } else {
      $('.see-results')
        .attr('disabled', 'disabled')
        .addClass('btn-theme-dark-disabled');
    }
  });

  //Redirect to loader page
  submitApplicationBtn.click(e => {
    window.location.href = 'loader.html';
    e.preventDefault();
  });
});
