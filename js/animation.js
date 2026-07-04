/*==========================
Scroll Reveal Animation
==========================*/

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

document.querySelectorAll(

".section,.project-card,.skill-card,.timeline-item,.contact-card,.stat-card"

).forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/*==========================
Floating Profile
==========================*/

const profile=document.querySelector(".profile-card");

window.addEventListener("mousemove",(e)=>{

    if(!profile) return;

    const x=(window.innerWidth/2-e.pageX)/40;

    const y=(window.innerHeight/2-e.pageY)/40;

    profile.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});


/*==========================
Counter Animation
==========================*/

const counters=document.querySelectorAll(".counter");

const speed=120;

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.dataset.target;

        const count=+counter.innerText;

        const inc=Math.ceil(target/speed);

        if(count<target){

            counter.innerText=count+inc;

            setTimeout(update,25);

        }else{

            counter.innerText=target;

        }

    }

    update();

});