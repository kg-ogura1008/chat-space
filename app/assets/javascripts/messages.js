$(function(){
  function buildHTML(message){
    var html = `<div class="main_content__body__text">
                  <ul>
                    <li class="main_content__body__text__name">
                      ${message.name}
                    </li>
                    <li class="main_content__body__text__date">
                      ${message.date}
                    </li>
                  </ul>
                  <p>
                    ${message.text}
                  </p>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    var button = $('.post-box__submit');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      beforeSend: function(xhr, settings){
        button.attr('disabled', true);
      },
      complete: function(xhr, settings){
        button.attr('disabled', false);
      }
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_content__body').append(html);
      $('.post__text').val('');
      $('.main_content__body').animate({scrollTop: $('.messages').height()}, 'fast');    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
});
