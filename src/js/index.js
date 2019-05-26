//Bootstrap
import 'bootstrap';

// jQuery plugins
import { Select } from './Select';

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
  const leadInput = document.querySelector( '.lead-input' );
  const searchMatches = document.querySelector( '.search-matches' );
  const dateOfBirth = document.getElementById( 'date-of-birth' );
  const maritialStatus = $( '#maritial-status' );
  const phone = document.getElementById( 'phone' );
  const email = document.getElementById( 'email' );
  const ssn = document.getElementById( 'social-number' );
  const address_1 = document.getElementById( 'address-1' );
  const city = document.getElementById( 'city' );
  const state = $( '#state' );
  const createNewApplicant = $( '.create-new-applicant' );

  //Toggle user dropdown menu
  userDropdownBtn.click(() => {
    userDropdown.fadeToggle();
  });

  //Application form autocomplete

  //Hard coded patienst data
  const patients = [
    {
      name: 'John Smith',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'john.smith.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'Jacob Gordon',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'jacob.gordon.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'Jessica Cates',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'jessica.cates.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'Jonathan Marcos',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'jonathan.marcos.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'Julia keren',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'julia.keren.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'John Doe',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Married',
      phone: '202-555-0177',
      email: 'john.doe.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'AZ',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    },
    {
      name: 'Marcos Alonso',
      dateOfBirth: '07/09/1980',
      maritialStatus: 'Not married',
      phone: '202-555-0177',
      email: 'marcos.alonso.1980@gmail.com',
      annualIncome: '',
      ssn: '115-50-3491',
      address_1: '2693 Washington Avenue',
      address_2: '',
      city: 'Phoenix',
      state: 'FL',
      housingStatus: '',
      monthlyPayment: '',
      loanDetails: ''
    }
  ];

  const names = [];

  patients.map( patient =>
  {
    names.push( patient.name );
  } );

  function findMatches( patientName, names )
  {
    return names.filter( name =>
    {
      const regex = new RegExp( patientName, 'gi' );
      return name.match( regex );
    } );
  }

  function displayMatches()
  {
    const matchArray = findMatches( this.value, names );
    const html = matchArray
      .map( name =>
      {
        return `
            <li class="search-matches-item">${name }</li>   
          `;
      } )
      .join( '' );
    searchMatches.innerHTML = html;
    createNewApplicant.css( 'display', 'block' );
  }

  if ( leadInput ) {
    leadInput.addEventListener( 'keyup', displayMatches );
  }

  if ( searchMatches ) {
    searchMatches.addEventListener( 'click', function ( e )
    {
      const targetName = e.target.textContent;
      leadInput.value = targetName;
      patients.filter( patient =>
      {
        if ( targetName == patient.name ) {
          dateOfBirth.value = patient.dateOfBirth;
          phone.value = patient.phone;
          email.value = patient.email;
          ssn.value = patient.ssn;
          address_1.value = patient.address_1;
          city.value = patient.city;

          if ( patient.maritialStatus == 'Married' ) {
            maritialStatus.prop( 'selectedIndex', 1 ).trigger( 'change' );
          } else {
            maritialStatus.prop( 'selectedIndex', 2 ).trigger( 'change' );
          }
          if ( patient.state == 'FL' ) {
            state.prop( 'selectedIndex', 1 ).trigger( 'change' );
          } else {
            state.prop( 'selectedIndex', 2 ).trigger( 'change' );
          }
        }
      } );
      searchMatches.innerHTML = '';
      createNewApplicant.css( 'display', 'none' );
    } );
  }

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
