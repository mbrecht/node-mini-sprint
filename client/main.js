$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  $('#get').click((e) => {
    e.preventDefault();
    let $node = $('<div>');
    let $p = $('<p>');

    getQuote(quote => { 
      $p.text(quote);
      $node.append($p);
      $('body').append($node); 
    });

  });

  function getQuote(cb){

    //YOUR CODE HERE, Add a GET request
    $.ajax('http://localhost:3000/quote/', {
      type: 'GET',
      success: (data) => { cb(data); }
    });

  }

  function addQuote(quote){
    
    //YOUR CODE HERE, Add a POST request
    $.ajax('http://localhost:3000/add', {
      type: 'POST',
      data: quote,
      success: () => { console.log('quote posted'); }
    });
  }
});
