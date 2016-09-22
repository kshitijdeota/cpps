//////  SCRIPT FOR THE SALIENT CHILD THEME  //////

jQuery(function($){

  // RENAME Portfolio TO Projects
  $('.portfolio-filters ul li a[data-filter="*"]').text('All Projects');
  $('#sort-portfolio').text('Sort Projects');

  //Show only four main filters
  $('.portfolio-filters ul li').hide();
  var al = "a[data-filter='*'], ",
      ds = "a[data-filter='.development-specialists'], ",
      pm = "a[data-filter='.project-management'], ",
      pa = "a[data-filter='.property-advisory']";
  $( al + ds + pm + pa ).parent().show();

  //////// SET NAVIGATION VARIABLES ///////

  var navOne      = $( 'a[href="#development-specialists"]' ),
      navTwo      = $( 'a[href="#project-management"]' ),
      navThree    = $( 'a[href="#property-advisory"]' ),
      
      homeUrl     = window.location.protocol + "//" + window.location.host + "/",
      
      navOneAlt   = homeUrl + "#development-specialists",
      navTwoAlt   = homeUrl + "#project-management",
      navThreeAlt = homeUrl + "#property-advisory",

      projects    = "#projects",
      projectsUrl = homeUrl + "#projects";
  
  // SWITCH LINK ATTRIBUTES AT Back to all Projects BUTTON
  $('#sort-portfolio').attr({ href: projects });
  $('#portfolio-nav li:eq(0) > a').attr({ href: projectsUrl });

  $( window ).load( function() {

    if ( panelOne.length ) {
      toggle.removeClass( "open" );
      panel.css({ "display" : "none" });
      $( ".toggle h3 a i" ).removeClass( "icon-minus-sign" ).addClass( "icon-plus-sign" );
    }

    var homeClassExists = $( 'body' ).hasClass( "home" ),
        atUrl = window.location.href;

    //////// NAVIGATION LINKS SWITCHER ////////
    
    if ( homeClassExists === true ) {
      navOne.attr( "href", "#development-specialists" );
      navTwo.attr( "href", "#project-management" );
      navThree.attr( "href", "#property-advisory" );
    } else {
      navOne.attr( "href", navOneAlt );
      navTwo.attr( "href", navTwoAlt );
      navThree.attr( "href", navThreeAlt );
    }

    //////// SCROLL TO HOME LOCATION ////////

    if ( atUrl === navOneAlt )    { scrollToOne(); }
    if ( atUrl === navTwoAlt )    { scrollToTwo(); }
    if ( atUrl === navThreeAlt )  { scrollToThree(); }
    if ( atUrl === projectsUrl )  { scrollToProjects(); }
    
  }); // window.load ends //

  //////// SETUP NAVIGATION SYSTEM ////////

  var toggle      = $("div.toggle"),
      toggleOne   = $("div.toggle:eq(0)"),
      toggleTwo   = $("div.toggle:eq(1)"),
      toggleThree = $("div.toggle:eq(2)"),
  
      panel       = $("div.toggle > div"),
      panelOne    = $("div.toggle:eq(0) > div"),
      panelTwo    = $("div.toggle:eq(1) > div"),
      panelThree  = $("div.toggle:eq(2) > div");

  function toggleButtonSwitch() {
    var toggleClicked = $( toggle ).click( "open" );
    var openClassExists = $( toggle ).hasClass( "open" );
    if ( toggleClicked && openClassExists ) {
      $( ".toggle h3 a i" ).removeClass( "icon-plus-sign" ).addClass( "icon-minus-sign" );
    } else {
      $( ".toggle h3 a i" ).removeClass( "icon-minus-sign" ).addClass( "icon-plus-sign" );
    }
  }

  function scrollToOne() {
    if ( panelOne.length ) {
      toggle.removeClass( "open" );
      toggleOne.addClass( "open" );
      panel.css({ "display" : "none" });
      panelOne.css({ "display" : "block" });
      $('html, body').animate({ scrollTop: panelOne.offset().top-115 }, 800, 'swing');
    }
  }

  function scrollToTwo() {
    if ( panelTwo.length ) {
      toggle.removeClass( "open" );
      toggleTwo.addClass( "open" );
      panel.css({ "display" : "none" });
      panelTwo.css({ "display" : "block" });
      $('html, body').animate({ scrollTop: panelTwo.offset().top-115 }, 800, 'swing');
    }
  }

  function scrollToThree() {
    if ( panelThree.length ) {
      toggle.removeClass( "open" );
      toggleThree.addClass( "open" );
      panel.css({ "display" : "none" });
      panelThree.css({ "display" : "block" });
      $('html, body').animate({ scrollTop: panelThree.offset().top-115 }, 800, 'swing');
    }
  }

  function scrollToProjects() {
    $('html, body').animate({ scrollTop: $( "#sort-portfolio" ).offset().top-200 }, 2000, 'swing');
  }

  navOne.click(function() {
    scrollToOne(); 
    $( ".toggle a i" ).addClass( "icon-plus-sign" );
    $( ".toggle a i" ).removeClass( "icon-minus-sign" );
    $( ".toggle:eq(0) a i" ).removeClass( "icon-plus-sign" );
    $( ".toggle:eq(0) a i" ).addClass( "icon-minus-sign" );
  });
  navTwo.click(function() {
    scrollToTwo();
    $( ".toggle a i" ).addClass( "icon-plus-sign" );
    $( ".toggle a i" ).removeClass( "icon-minus-sign" );
    $( ".toggle:eq(1) a i" ).removeClass( "icon-plus-sign" );
    $( ".toggle:eq(1) a i" ).addClass( "icon-minus-sign" );
  });
  navThree.click(function() {
    scrollToThree();
    $( ".toggle a i" ).addClass( "icon-plus-sign" );
    $( ".toggle a i" ).removeClass( "icon-minus-sign" );
    $( ".toggle:eq(2) a i" ).removeClass( "icon-plus-sign" );
    $( ".toggle:eq(2) a i" ).addClass( "icon-minus-sign" );
  });
  
}); // THAT'S ALL FOLKS!

