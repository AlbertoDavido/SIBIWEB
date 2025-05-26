const reveals=document.querySelectorAll(".animate")

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if (entry.isIntersecting){
            entry.target.classList.add("styled")
        }
    });
});
reveals.forEach(el => observer.observe(el));

const revealer=document.querySelectorAll(".f-area")
console.log(revealer);
const observation=new IntersectionObserver((entryes)=>{
    entryes.forEach((entr)=>{
        if (entr.isIntersecting){
            entr.target.classList.add("style")
        }
    });
});
revealer.forEach(el => observation.observe(el));

/*let action=document.querySelectorAll(".f-area");
action.forEach(action =>{
action.addEventListener("click",function(event){
    event.preventDefault();
document.getElementById("scroll").scrollIntoView({behaviour: "smooth"})
});
})

console.log(action);*/








