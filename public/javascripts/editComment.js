// var button = $(`#r-${id}`)

$('.review-container').on('click', '.edit-button', function(e) {
  e.preventDefault();
  const id = $(this).attr('data-id')
  var  $reviewText = $(`#p-${id}`)
  console.log($reviewText);
  console.log($(this))
  $reviewText.html(`<textarea form="review-form-${id}" name="comment" rows="3" cols="70"> ${$reviewText[0].textContent}</textarea>`)
  $saveEdit = $(`<input type="submit" value="Save">`)
  $(this).replaceWith($saveEdit)
})

