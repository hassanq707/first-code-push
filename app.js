let obj = [
    {
        p_image : './towel.jpg',
        p_name : 'Towel',
        p_des : 'Amazon hello Basics Microfiber Cleaning  Cloth, Non-Abrasive ',
        p_price : '$40'
    },
    {
        p_image : './caps.jpg',
        p_name : 'Caps',
        p_des : 'Custom logo printed Cap., Best Quality for Cap & Printing.',
        p_price : '$10'
    },
    {
        p_image : './shirts.jpg',
        p_name : 'Shirts',
        p_des : "Gildan Men's Crew hi T-Shirts, Multipack, Style G1100",
        p_price : '$20'
    },
    {
        p_image : './jacket.jpg',
        p_name : 'Jacket',
        p_des : "Tommy Hilfiger Men's Ultra Loft Lightweight Packable Puffer" ,
        p_price : '$80'
    },
    {
        p_image : './toy.jpg',
        p_name : 'Toy',
        p_des : "TeeTurtle cute - hi The Original Reversible Octopus Plushie ",
        p_price : '$35'
    },
    {
        p_image : './towel.jpg',
        p_name : 'Towel',
        p_des : 'Amazon  hello Basics Microfiber Cleaning Cloth, Non-Abrasive',
        p_price : '$40'
    }
]

const main = document.getElementById('main');
for(var i = 0 ; i < obj.length ; i++){
   main.innerHTML += `<div class="cards"> 
    
    <img src= ${obj[i].p_image } class = 'img'>
     <h2 class = 'abc'>${obj[i].p_name }</h2>
     <p class= 'abc'>${obj[i].p_des}</p>
     <p class = 'abc'>${obj[i].p_price}</p>
      <a href='#' class = 'btn'>Order here</a>
   </div>`
}