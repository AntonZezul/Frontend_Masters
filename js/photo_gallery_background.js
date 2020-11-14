function backgroundGalleryOnHover(e) {
    let imgSrc = $(e).find('img').attr('src')
    $('#headImage_gallery').fadeOut('fast', ()=>{
    	$('#headImage_gallery').css('background-image', `url(${imgSrc})`)
    	$('#headImage_gallery').fadeIn('fast')
    })
}

function backgroundGalleryHoverReset() {
    let imgSrc = $('.photo_box:first-child').find('img').attr('src')
    $('#headImage_gallery').fadeOut('fast',()=>{
    	$('#headImage_gallery').css('background-image', `url(${imgSrc})`)
    	$('#headImage_gallery').fadeIn('fast')
    })

}

