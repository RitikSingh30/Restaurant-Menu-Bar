const menuItems =[
    // creating object inside the array
    {
        id: 1,
        item: "Food Item1",
        oneliner : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, nostrum!",
        img : "Images/Filipino-Dish.jpg",
        hotel : "Hotel name1",
        desc : "One:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde obcaecati magnam dignissimos assumenda voluptas ratione voluptatem officiis? Soluta, veniam eos."
    },
    {
        id: 2 ,
        item: "Food Item2",
        oneliner : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, esse quo.",
        img : "Images/OIP.jpg",
        hotel : "Hotel name2",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam excepturi minima deserunt dolorum laborum! Debitis neque repellendus ab facilis voluptates."
    },
    {
        id : 3 ,
        item : "Food Item3",
        oneliner : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, in?",
        img : "Images/OIP (1).jpg",
        hotel : "Hotel name3",
        desc : "ritik Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit eveniet tempora minus sit vel explicabo, dolorum hic! Dolorum, accusantium!"
    },
    {
        id : 4 ,
        item : "Food item4",
        oneliner : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iusto.",
        img : "Images/photo-antipasto-platter-italian-food.jpg",
        hotel : "Hotel name4" ,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quod voluptas corporis expedita labore consequatur vel? Ipsam officia officiis quo",
    },
    {
        id : 5 ,
        item : "Food item5",
        oneliner : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, saepe",
        img : "Images/R.jpg",
        hotel : "Hotel name5" ,
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptatem adipisci quas reprehenderit aut ipsa, dignissimos eum placeat qui facere?"
    }
];

const item = document.getElementById('item');
const oneLinear = document.getElementById('oneLiner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

let currentMenu = 0 ;

// jabhi window load hoga tab ye event listner call hoga
window.addEventListener('DOMContentLoaded',function(){
    allMenu(currentMenu) ;
});

const allMenu = () =>{
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLinear.textContent = menu.oneliner;
    img.src = menu.img ;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}

// random menu 
random.addEventListener('click' , () =>{
    currentMenu = Math.floor(Math.random() * menuItems.length);
    // console.log(currentMenu) ;
    allMenu(currentMenu);
});

// prevbtn
prev.addEventListener('click',() =>{
    currentMenu-- ;
    if(currentMenu < 0){
        currentMenu = menuItems.length - 1 ;
    }
    allMenu(currentMenu) ;
});

// nextbtn 
next.addEventListener('click' , ()=>{
    currentMenu++ ;
    if(currentMenu >= menuItems.length){
        currentMenu = 0 ;
    }
    allMenu(currentMenu) ;
})