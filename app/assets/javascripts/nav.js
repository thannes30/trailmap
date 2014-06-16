$(function(){
  $('.loginform').hide()

  $('.login-button').on('click', function(){
    $('.background').fadeOut()
    $('.signup-container').fadeOut()
    if ($('.loginform').css('display') === 'block') {

      $('.loginform').hide(500)
    }
    else {
      $('.loginform').show(500)
    }
  })


    $('.background').hide()
    $('.signup-container').hide()
  $('.signup-button').on('click', function(){
    $('.signup-container').fadeIn()
    $('.loginform').hide(500)
    $('.background').fadeIn()
  })

  $('.close-signup').on('click', function(){
    $('.background').fadeOut()
    $('.signup-container').fadeOut()
  })

  // $('.loginform').on('submit', function(e){
  //   e.preventDefault()
  //   var usernameI = $('#username').val()
  //   var passwordI = $('#password').val()
  //   var loginDetails = {username: usernameI, password: passwordI}
  //   $.ajax({
  //     url: '/sessions',
  //     method: 'post',
  //     dataType: 'json',
  //     data: {login: loginDetails},
  //     success: function(data){
  //       console.log(data)
  //     }

  //   })

  // })
})
