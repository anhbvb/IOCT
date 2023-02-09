// hiệu ứng header __________________________________________________
var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');
function handleIndicator(el) {
    items.forEach(function (item) {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    indicator.style.width = "".concat(el.offsetWidth, "px");
    indicator.style.left = "".concat(el.offsetLeft, "px");
    indicator.style.backgroundColor = el.getAttribute('active-color');
    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}
items.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        handleIndicator(e.target);
    });
    item.classList.contains('is-active') && handleIndicator(item);
});
//_______________________________________________________________________

//___________________________________________________________________

function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}
var buttons = document.getElementsByClassName('dropbtn');
var contents = document.getElementsByClassName('dropdown-content');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var id = this.value;
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }
        myFunction(id);
    });
}
window.addEventListener('click', function(){
     if (!event.target.matches('.dropbtn')){
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }
     }
});


// hiện tắt mật khẩu ___________________________________________
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye fa-eye-slash');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

$(document).ready(function(){$('#eyes').click(function(){
    $(this).toggleClass('open');
    $(this).children('i').toggleClass('fa-eye fa-eye-slash');
    if($(this).hasClass('open')){$(this).prev().attr('type', 'text');}
    else{$(this).prev().attr('type', 'password');}});}
    );
$('.search-button').click(function(){$(this).parent().toggleClass('open');});
//______________________________________________________________________
// hiện tắt sangs toi___________________________________________
$(document).ready(function(){
    $('#regime').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-solid fa-moon');
    });
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("body-dark");
}

//______________________________________________________________________


// back to top _________________________________________________________
var offset = 500;
var duration = 500;
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);
        else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
        $('body,html').animate({scrollTop: 0}, duration);
    });
});
//__________________________________________________________________

//  result ___________________________________________________________
document.getElementById("btn-one").onclick = function () {document.getElementById("table-one").style.display = 'none';};
document.getElementById("draw-up-one", ).onclick = function () {document.getElementById("table-one").style.display = 'block';};

document.getElementById("btn-two").onclick = function () {document.getElementById("table-two").style.display = 'none';};
document.getElementById("draw-up-two").onclick = function () {document.getElementById("table-two").style.display = 'block';};

document.getElementById("btn-three").onclick = function () {document.getElementById("table-three").style.display = 'none';};
document.getElementById("draw-up-three").onclick = function () {document.getElementById("table-three").style.display = 'block';};

document.getElementById("btn-four").onclick = function () {document.getElementById("table-four").style.display = 'none';};
document.getElementById("draw-up-four").onclick = function () {document.getElementById("table-four").style.display = 'block';};

document.getElementById("btn-five").onclick = function () {document.getElementById("table-five").style.display = 'none';};
document.getElementById("draw-up-five").onclick = function () {document.getElementById("table-five").style.display = 'block';};
//_______________________________________________________________

document.getElementById("contents-of").onclick = function () {document.getElementById("content-on").style.display = 'none';};
document.getElementById("chevron").click = function () {document.getElementById("contents-on").style.display = 'block';};
































const showBtn = document.querySelector("chevron")
const hideBtn = document.querySelector("#hide")
const div = document.querySelector("contents-on")
showBtn.addEventListener('click', () => {
  div.style.display = 'block'
})
hideBtn.addEventListener('click', () => {
  div.style.display = 'none'
})


