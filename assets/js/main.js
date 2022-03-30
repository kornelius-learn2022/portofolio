const layer = document.getElementById('layer');
const loading = document.getElementById('loading');
const obj = document.getElementById('obj');
const obj1 = document.getElementById('obj1');
const obj2 = document.getElementById('obj2');
const obj3 = document.getElementById('obj3');
const obj4 = document.getElementById('obj4');
const obj5 = document.getElementById('obj5');
const navt = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggler bottom');
const nav = document.querySelector('nav ul');
const isi = document.getElementById('isi');
const cont = document.getElementById('container');
const foot = document.getElementById('social_media');

window.onload = function onload(){
    layer.classList.add('layer');
    loading.classList.add('loading');
    obj.classList.add('obj');
    obj1.classList.add('obj');
    obj2.classList.add('obj');
    obj3.classList.add('obj');
    obj4.classList.add('obj');
    obj5.classList.add('obj');
    return true;
}

function time_load_end(){
    layer.classList.remove('layer');
    loading.classList.remove('loading');
    obj.classList.remove('obj');
    obj1.classList.remove('obj');
    obj2.classList.remove('obj');
    obj3.classList.remove('obj');
    obj4.classList.remove('obj');
    obj5.classList.remove('obj');
    navt.style.opacity = '1';
    isi.style.opacity = '1';
    foot.style.opacity='1';
}

function load_end(){
if (onload() == true){
    const waste = setTimeout(time_load_end,1000);
    return true;
}
}
// if (onload() == true){
//     const waste = setTimeout(time_load_end,1000);
// }
toggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
    cont.classList.toggle('container')
});
if (load_end() == true){
    ScrollReveal({  reset:true, 
        duration: 2000,
        distance:'60px',
        delay:400
});
    ScrollReveal().reveal('.home__data,#about_foto,#card-1,#card-3,.tag-1-1,.tag-2,#skill-menu',{delay:500,origin:'left'});
    ScrollReveal().reveal('.home__img,#about_teks,#card-2,#card-4,.tag-1,.tag-2-2,#skill-foto',{delay:1000,origin:'rigth'});
  ScrollReveal().reveal('.about-text',{delay:500,origin:'bottom'});
}