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

  $('.new_user').on('submit', function(e){
    e.preventDefault()
    var usernameI = $('#user_username').val()
    var emailI = $('#user_email').val()
    var passwordI = $('#user_password').val()

    var signupDetails = {username: usernameI, email: emailI, password: passwordI}
      $.ajax({
        url: '/users',
        method: 'post',
        dataType: 'json',
        data: {user: signupDetails},
        success: function(data){
          lichard = data
          $('.errors').html('')
          if (!data['id']) {
            $.each(data, function(index, value){
              $('.errors').append($('<p>').html(value))
            })
          }

          else {
            $('.errors').html('')
            $('#username').val($('#user_email').val())
            $('#password').val($('#user_password').val())
            $('.signup-container').html('Success!')
            $('.loginform').show(500)
            $('.signup-container').fadeOut()
            $('.background').fadeOut()
          }
        }
      })
  })
})
