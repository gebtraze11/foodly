$('#edit-button').on('click', e=>{
    const id = $('#edit-button').attr('data-id')
    var  $reviewText = $(`#p-${id}`)
    console.log($reviewText);
  var editText = $(`<textarea form="review-form" name="comment" rows="2" cols="40"> ${$reviewText[0].textContent}</textarea>`)[0]

  $reviewText.replaceWith(editText)

  $saveEdit = $(`<input type="submit" value="SAVE">`)

  $('#edit-button').replaceWith($saveEdit)
})





// $('#delete-button').on('click', e=>{
//   const id = $('#delete-button').attr('data-id')
//   var  $deleteText = $(`#r-${id}`)
//   console.log($deleteText);
//   $deleteText.remove()
// })