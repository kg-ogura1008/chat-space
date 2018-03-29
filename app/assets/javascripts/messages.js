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
                  <image src="${message.image_url}">
                </div>`
    return html;
  }

  $('new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FromData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_content__body').append(html)
    })
  })
});
