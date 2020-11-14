function backgroundCategoryOnHover(e){
    let imgSrc = $(e).find('img').attr('src')
    $('#headImage_category').fadeOut('fast', ()=>{
        $('#headImage_category').css('background-image',`url(${imgSrc})`)
        $('#headImage_category').fadeIn('fast')
    })



}
function backgroundCategoryHoverReset(){
    let imgSrc = $('.photo_box:first-child').find('img').attr('src')
    $('#headImage_category').fadeOut('fast',()=>{
        $('#headImage_category').css('background-image',`url(${imgSrc})`)
        $('#headImage_category').fadeIn('fast')
    })
}
