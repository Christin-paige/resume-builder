

export default function Button(){
 
    let show = document.getElementById('infoSection');
    if (show.style.display === 'none'){
        show.style.display = 'block';
    }else{
     show.style.display = 'none';
    }
    
    

return(
    <>
<button>+</button>
</>
)
}