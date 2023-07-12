var DivLists= document.querySelectorAll('.text_section');
var videoContent= document.getElementById('source');
var videos = ['1.mp4','2.mp4','3.mp4'];
DivLists.forEach((divlist,index)=>{
    divlist.addEventListener('click',function(e){
        e.preventDefault();
        DivLists.forEach((ele,)=>{
            ele.classList.remove('active');
        })
        divlist.classList.add('active');
        // console.log(index);
        videoContent.src=videos[index];
        videoContent.play();
    })
})

