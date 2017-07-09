/**
 * Created by 天空之镜 on 2017-07-02.
 */
//鼠标移入图片增加加号
$(function(){
    //BEST OFFER FOR WEEKEND鼠标移入增加效果出现
    $('.pic_img').on('mouseover',function () {
        $(this).find('.add1').animate({
            top:"100px"
        },"slow")
        $(this).find('.add2').animate({
            top:"55px"
        },"slow")
    })
    $('.pic_img').on('mouseout',function () {
        $(this).find('.add1').animate({
            top:"-100px"
        },"slow")
        $(this).find('.add2').animate({
            top:"-155px"
        },"slow")
    })
    //鼠标移入，价格向左移动
    $('.price').on('mouseover',function () {
        $(this).find('.money').addClass('animate_price')
    })
    $('.price').on('mouseout',function () {
        $(this).find('.money').removeClass('animate_price')
    })

    //鼠标移入星星
    $('.star1').on('mouseover',function () {
        $(this).removeClass('glyphicon-star-empty').addClass('green  glyphicon-star')
    })
    $('.star1').on('mouseout',function () {
        $(this).addClass('glyphicon-star-empty').removeClass('green glyphicon-star')
    })
    $('.star2').on('mouseover',function () {
        $(this).removeClass(' glyphicon-star-empty').addClass('green  glyphicon-star')
        $('.star1').removeClass(' glyphicon-star-empty').addClass('green  glyphicon-star ')
    })
    $('.star2').on('mouseout',function () {
        $(this).addClass('glyphicon-star-empty').removeClass('green glyphicon-star')
        $('.star1').addClass('glyphicon-star-empty').removeClass('green glyphicon-star ')
    })
})
