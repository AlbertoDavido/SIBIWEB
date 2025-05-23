const reveals=document.querySelectorAll(".animate")

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if (entry.isIntersecting){
            entry.target.classList.add("styled")
        }
    });
});
reveals.forEach(el => observer.observe(el));

const revealer=document.querySelectorAll(".home-animate")
console.log(revealer);
const observation=new IntersectionObserver((entryes)=>{
    entryes.forEach((entr)=>{
        if (entr.isIntersecting){
            entr.target.classList.add("styled")
        }
    });
});
revealer.forEach(el => observation.observe(el));










