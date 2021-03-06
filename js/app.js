/*$( document ).ready(function()){//waiting for the document to be ready

$('#container').on('click', function(){
  alert('You clicked the container div!')
})

$('#myBtn').on('click', function(){
  alert('You clicked me!')
  event.stopPropagation()//stops the #container alert from popping up after the button is clicked
})
$('#drinks').append('<li>Coke</li><li>Sprite</li><li>Dr. Pepper</li>')

$('#foods').append("<li>Fries</li>", '<li>Tacos</li>', '<li>Burritos</li>')

//OR
//var foods = ['burgers', 'fries']
//for (var i = 0; i < foods.length; i++) {
//  $('foods').append('<li>' + foods[i] + '</li>')
//}

$('#addFood').on('click', function(){

  var newFood = $('#foodInput').val()
  if(newFood != '') {
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
}
})

$('#addDrink').on('click', function(){
  var newDrink = $('#drinkInput').val()//getter
  if(newDrink != '') {
  $('#drinks').append('<li>' + newDrink + '</li>')
  $('#drinkInput').val('')//setter
}
})

$('#drinkInput').keypress(function(){
  $('#drinkInput').parent().addClass('red')
})

$('#drinkInput').keydown(function(e){
  if(e.keyCode === 13){
    var newDrink = $('#drinkInput').val()//getter
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')//setter
    }
  }
})
}*/

$( document ).ready(function(){

  var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']

  // for (var i = 0; i < foods.length; i++) {
  //   $('#foods').append('<li>' + foods[i] + '</li>')
  // }

  foods.forEach(function(food){
    $('#foods').append('<li>' + food + '</li>')
  })

  $('#drinks').append('<li>Mountain Dew</li><li>Sprite</li><li>Dr. Pepper</li>')

  $('#addFood').on('click', function(){
    var newFood = $('#foodInput').val()
    if(newFood != '') {
      $('#foods').append('<li>' + newFood + '</li>')
      // $('<li />', {html: newFood}).appendTo('ul#foods')
      $('#foodInput').val('')
    }
  })

  $('#addDrink').on('click', function(){
    var newDrink = $('#drinkInput').val()
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')
    }
  })

  $('#drinkInput').keydown(function(e){
    if(e.keyCode === 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink !== '') {
        $('#drinks').append('<li class="purpleText">' + newDrink + '</li>')
        $('#drinkInput').val('')
        $('#drinkInput').removeClass('purple')
      }
    } else {
      $('#drinkInput').addClass('purple')
    }
  })

})
