let lkg= document.getElementById('image');
let btn=document.getElementById('btn');
let carsouel=[
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15597164/pexels-photo-15597164/free-photo-of-a-cat-sitting-on-top-of-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19368694/pexels-photo-19368694/free-photo-of-a-dog-is-sitting-in-the-snow-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18646219/pexels-photo-18646219/free-photo-of-butterfly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15587985/pexels-photo-15587985/free-photo-of-a-cat-sitting-on-top-of-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7940427/pexels-photo-7940427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]
let count=0;
btn.addEventListener('click',()=>{
    setInterval(()=>{
        if (count<carsouel.length) {
            lkg.src=carsouel[count]
            count++;
        }
        else{
            count=0;
        }
       
    },1500)
})


