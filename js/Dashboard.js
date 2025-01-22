
//Loader
var loader=document.querySelector('#loader')
window.onload=function(){
    loader.classList.add('hidden')
}

//Move to top
var moveToTop=document.querySelector('#scrollToTop')
window.onscroll=function(){
    if(document.body.scrollTop>200 || document.documentElement.scrollTop > 200){
        moveToTop.classList.remove('hidden')
    }else{
        moveToTop.classList.add('hidden')
    }
}

//Arrow icon
var rightHeader = Array.from(document.querySelectorAll('.right-header'))
rightHeader.forEach(rightIcon=>{
    rightIcon.addEventListener('click',function(){
        rightIcon.children[2].classList.toggle('rotate-180')
        rightIcon.children[3].classList.toggle('hidden')
        rightHeader.forEach(right=>{
            if(right !== rightIcon){
                right.children[2].classList.remove('rotate-180')
                right.children[3].classList.add('hidden')
            }
        })
    })
})

//Sidebar
var toggleBtn=document.getElementById('toggle-btn')
var sidebar=document.getElementById('sidebar')
var header=document.getElementById('header')
var mainContent=document.getElementById('main-content')

toggleBtn.addEventListener('click',function(){
    if(window.innerWidth>768){
        sidebar.classList.toggle('-translate-x-full')
        header.classList.toggle('ml-52')
        mainContent.classList.toggle('ml-52')    
    }else{
        sidebar.classList.toggle('-translate-x-full')
        header.classList.remove('ml-52')
        mainContent.classList.remove('ml-52')    
    }
})
        
window.addEventListener('resize',function(){
    sidebar.classList.add('-translate-x-full')
    header.classList.remove('ml-52')
    mainContent.classList.remove('ml-52')
})

//Slider image
const swiper=new Swiper('.swiper-container',{
    autoplay:{
        delay:3000
    },
    navigation:{
        nextEl:
            '.swiper-button-next',
        prevEl:
            '.swiper-button-prev',
    },
        slidesPerView:1,
        spaceBetween:60
})

// Users information
var usersTable=document.querySelector('#users-table')
var xhr1=new XMLHttpRequest()
xhr1.open('Get','https://jsonplaceholder.typicode.com/users')
xhr1.onload=function(){
    if(this.status===200){
        let result=JSON.parse(this.response).slice(0,5)
        result.forEach(item=>{
            var tr=document.createElement('tr')
            tr.classList.add('text-gray-300','text-center','hover:bg-blue-950')
            tr.innerHTML=`
                <td class="border-2 border-gray-400 py-2">${item.id}</td>
                <td class="border-2 border-gray-400">${item.name}</td>
                <td class="border-2 border-gray-400">${item.username}</td>
                <td class="border-2 border-gray-400">${item.phone}</td>
            `
            usersTable.appendChild(tr)
        })
    }
}
xhr1.send()

//Calendar
const monthYearElement=document.getElementById('monthYear')
const calendarBody=document.getElementById('calendarBody')
const prevButton=document.getElementById('prev')
const nextButton=document.getElementById('next')
        
let currentDate=new Date()

function renderCalendar(){
    const month=currentDate.getMonth()
    const year=currentDate.getFullYear()

    monthYearElement.innerHTML=`${getMonthName(month)} ${year}`

    calendarBody.innerHTML=''

    const firstDayOfMonth= new Date(year,month,1)
    const lastDayOfMonth=new Date(year,month+1,0)

    const firstDayIndex=firstDayOfMonth.getDay()
    const totalDays=lastDayOfMonth.getDate()

    let row=document.createElement('tr')

    for(let i=0;i<firstDayIndex;i++){
        row.appendChild(document.createElement('td'))
    }

    for(let day=1;day <= totalDays;day++){
        const cell=document.createElement('td')
        cell.className='border-none px-2 py-1 table-td'

        if(day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()){
            cell.classList.add('today','bg-blue-700','text-white')
        }

        cell.innerHTML=day
        row.appendChild(cell)

        if((day + firstDayIndex) % 7 === 0){
            calendarBody.appendChild(row)
            row=document.createElement('tr')
        }
    }

    if(row.children.length>0){
        calendarBody.appendChild(row)
    }

    const cells=Array.from(document.querySelectorAll('.table-td')) 
    cells.forEach(cell=>{
        cell.classList.add('rounded-xl','cursor-pointer','hover:bg-white','hover:text-blue-950')
    })  
}
        
function getMonthName(monthIndex){
    const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
    return monthNames[monthIndex]
}
prevButton.addEventListener('click',function(){
    currentDate.setMonth(currentDate.getMonth()-1)
    renderCalendar()
})
nextButton.addEventListener('click',function(){
    currentDate.setMonth(currentDate.getMonth()+1)
    renderCalendar()
})
renderCalendar()

//To do
var todoTable=document.querySelector('#todo-table')
var xhr2=new XMLHttpRequest()
xhr2.open('Get','https://jsonplaceholder.typicode.com/todos')
xhr2.onload=function(){
    if(this.status===200){
        let result=JSON.parse(this.response).slice(0,5)
        result.forEach(item=>{
            var tr=document.createElement('tr')
            tr.classList.add('text-gray-300','text-center','hover:bg-blue-950')
            if(item.completed){
                tr.innerHTML=`
                <td class="border-2 border-gray-400 py-2">${item.id}</td>
                <td class="border-2 border-gray-400">${item.title}</td>
                <td class="border-2 border-gray-400"><span class="material-symbols-outlined text-green-500 ">check</span></td>
                `
            }else{
                tr.innerHTML=`
                <td class="border-2 border-gray-400 py-2">${item.id}</td>
                <td class="border-2 border-gray-400 ">${item.title}</td>
                <td class="border-2 border-gray-400 "><span class="material-symbols-outlined text-red-500 ">close</span></td>
                `
            }
            todoTable.appendChild(tr)
        })
    }
}
xhr2.send()
    