
window.onload = function (){

  var xhr = new XMLHTTPRequest(); // #1.
  xhr.onreadystatechange = function (){  //#2
    if (xhr.readyState == 4 && xhr.status == 200){
      document.getElementById('ajax').innerHTML = xhr.responseText;
      console.log(JSON.parse(xhr.response);
    }
  };
  xhr.open('GET', 'data/form.json', true); //#3
  xhr.send(); //#4
};

Jquery version of ajax

$.get("scripts/form.json").then(function(form){
  console.log(form);
});
}
//Treehouse Jquery AJAX
function sendAJAX(){
$('#ajax').load('sidebar.html');
};

//Example
$.get(url, data, callback);
//Using Example
$.get("scripts/form.json", data, function (response){
  var statusHTML = '<ul class='bulleted'>';
  });
});


var $orders = $('#orders');
var $name = $name = $('#name');
var $drink = $('#drink');
$.ajax({
  type: 'GET';
  url: 'scripts/form.json',
  success: function(orders){
    $.each(orders, function(i, order){
      addOrder(order);
    });
  },
  error:function(){
    alert('error loading orders')
  }
});

$('#add-order').on('click', function(){
  var order = {
    name: $name.val();
    drink: $drink.val();
  };
  $.ajax({
    type:'POST',
    url: 'scripts/form.json',
    data: order,
    success: function(newOrder){
      $orders.append('<li>name: ' + newOrder.name +', drink:' + newOrder.drink + '</li>');
    };
    error: function(){
      alert('error saving order!');
    }
  })
});


/**
How Ajax works:

1. Create an XMLHTTP Request object.
2. Create a callback function.
3. Open a Request.
4. Send the request.
**/
