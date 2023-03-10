window.addEventListener("load", init)


function init(){
const jelen = document.querySelector('#current');
const kepek = document.querySelectorAll('.article img');
const keplist = ["kepek/_DSC7515.jpg","kepek/_DSC7444.jpg","kepek/_DSC7365.jpg"];
for (let index=0;index<keplist.length;index++){
    kepek[index].addEventListener("click",function(){
        kattint(index,keplist)
    })
};
}

function kattint(elem) {
    kepek.forEach(img => (img.style.opacity = 1));
    jelen.src = elem.target.src;
    jelen.classList.add('becsusz');
    setTimeout(() => jelen.classList.remove('becsusz'), 500);
    elem.target.style.suru = suru;
}

const suru = 0.4;

kepek.style.opacity = suru;

function kiskep(index,keplist){
    console.log(jelen.target)
    const NagyKep=document.querySelectorAll("section div img")
    console.log(NagyKep)
    NagyKep[0].src=keplist[index]
}
kiskep()