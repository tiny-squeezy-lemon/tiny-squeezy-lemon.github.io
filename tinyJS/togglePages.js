/* TOGGLE MENU */

$( document ).ready( openMenu );

function openMenu() {
    $( '#menuButton' ).click( navToggled );
    
    $( '#link1' ).click( navClose );
    $( '#link2' ).click( navToggled );
    $( '#link3' ).click( navToggled );
    $( '#link4' ).click( navToggled );
    $( '#link5' ).click( navToggled );
    
    
    function navToggled( e ){
        $( '#navMenu, #navIcon' ).toggleClass( 'active' );
    }
    
    function navClose( e ){
        $( '#navMenu, #navIcon' ).removeClass( 'active' );
    }
}