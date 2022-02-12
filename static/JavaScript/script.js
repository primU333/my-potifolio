
//checking dark mode
const check = ()=> {
    const butn = document.getElementById('dark-toggle');
    const change = document.body;

    butn.addEventListener('click', ()=>{
        change.classList.toggle('dark');
    })
}

check();



//swipe projects  ((feature disabled))//

const swipeProjects = () =>{
    
    function ontouch(el, callback){
        
        var touchsurface = el,
        dir,
        swipeType,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 500, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handletouch = callback || function(evt, dir, phase, swipetype, distance){}
    
        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            dir = 'none'
            swipeType = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            handletouch(e, 'none', 'start', swipeType, 0) // fire callback function with params dir="none", phase="start", swipetype="none" etc
            e.preventDefault()
    
        }, false)
    
        touchsurface.addEventListener('touchmove', function(e){
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
                dir = (distX < 0)? 'left' : 'right'
                handletouch(e, dir, 'move', swipeType, distX) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
            }
            else{ // else consider this a vertical movement
                dir = (distY < 0)? 'up' : 'down'
                handletouch(e, dir, 'move', swipeType, distY) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
            }
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)
    
        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipeType = dir // set swipeType to either "left" or "right"
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                    swipeType = dir // set swipeType to either "top" or "down"
                }
            }
            // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
            handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY)
            e.preventDefault()
        }, false)
    }



    window.addEventListener('load', function(){
    var el = document.getElementById('swipegallery') // reference gallery's main DIV container
    var gallerywidth = el.offsetWidth
    var ul = el.getElementsByTagName('ul')[0]
    var liscount = ul.getElementsByTagName('li').length, curindex = 0, ulLeft = 0
    ul.style.width = gallerywidth * liscount + 'px' // set width of gallery to parent container's width * total images



    ontouch(el, function(evt, dir, phase, swipetype, distance){
        if (phase == 'start'){ // on touchstart
        ulLeft = parseInt(ul.style.left) || 0 // initialize ulLeft var with left position of UL
        }
        else if (phase == 'move' && (dir =='left' || dir =='right')){ //  on touchmove and if moving left or right
            var totaldist = distance + ulLeft // calculate new left position of UL based on movement of finger
            ul.style.left = Math.min(totaldist, (curindex+1) * gallerywidth) + 'px' // set gallery to new left position
        }
        else if (phase == 'end'){ // on touchend
            if (swipetype == 'left' || swipetype == 'right'){ // if a successful left or right swipe is made
                curindex = (swipetype == 'left')? Math.min(curindex+1, liscount-1) : Math.max(curindex-1, 0) // get new index of image to show
            }
            ul.style.left = -curindex * gallerywidth + 'px' // move UL to show the new image
        }
    }) // end ontouch
    }, false)
}
//swipeProjects();




//enlarge image

const showImage = ()=>{
    const myImage = document.querySelector('.my-image');
    myImage.addEventListener('click', ()=>{
        myImage.classList.toggle('large-image');
    })
}

showImage();


//loader function

var myLink = document.getElementById('linkers');
function loadLoader(){
    setTimeout(loader, 3000);
}

function loader(){
    var loaderContainer = document.querySelector('.loader')
    loaderContainer.style.display = 'none';

}
window.addEventListener('load', loadLoader);
myLink.addEventListener('click', loadLoader);




//move project images with radio buttons

const moveIMages = ()=>{
    var btn1 = document.getElementById('slide-1')
    var btn2 = document.getElementById('slide-2')
    var btn3 = document.getElementById('slide-3')
    var btn4 = document.getElementById('slide-4')

    var mySites = document.getElementById('sites')

    btn1.addEventListener('click', ()=>{
        sites.style.left = '0'
        btn1.style.background = 'black';
        btn2.style.background = 'blue';
        btn3.style.background = 'blue';
        btn4.style.background = 'blue';
    })

    btn2.addEventListener('click', ()=>{
        sites.style.left = '-300px';
        btn2.style.background = 'black';
        btn1.style.background = 'blue';
        btn3.style.background = 'blue';
        btn4.style.background = 'blue';
    })

    btn3.addEventListener('click', ()=>{
        sites.style.left = '-600px';
        btn3.style.background = 'black';
        btn1.style.background = 'blue';
        btn2.style.background = 'blue';
        btn4.style.background = 'blue';
    })

    btn4.addEventListener('click', ()=>{
        sites.style.left = '-900px';
        btn4.style.background = 'black';
        btn1.style.background = 'blue';
        btn3.style.background = 'blue';
        btn2.style.background = 'blue';
    })


}

moveIMages();
