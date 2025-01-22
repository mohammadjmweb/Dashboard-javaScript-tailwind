
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

        //Charts
        var ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'bar',
    data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [{
            label: 'USA',
            data: [18, 30, 55, 65, 60, 80],
            borderWidth: 1,
            backgroundColor: 'rgba(255,0,0,0.6)',
                    
            },
            {
                label: 'UK',
                data: [10, 35, 40, 60, 70, 55],
                borderWidth: 1,
                backgroundColor: 'rgba(0,255,0,0.6)'
            },
            {
                label: 'AU',
                data: [15, 25, 45, 55, 65, 70],
                borderWidth: 1,
                backgroundColor: 'rgba(0,0,255,0.6)'
            }
            ]
        },
        options: {
            plugins:{
                legend:{
                    labels:{
                        color:'white'
                    }
                }
            },
            scales:{
                x:{
                    grid:{
                        color:'dimgray'
                    },
                    ticks:{
                        color:'white'
                    }
                },
                y:{
                    grid:{
                        color:'dimgray'
                    },
                    ticks:{
                        color:'white'
                    }
                }
                },
            responsive: true,
            maintainAspectRatio: false
        }
    });

var ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [{
            label: 'Salse',
            fill:true,
            data: [100, 130, 170, 125, 190, 185],
            borderWidth: 3,
            backgroundColor: 'rgba(128,128,128,0.2)',
            borderColor:'rgba(255,255,255,0.7)'
        },
        {
            label: 'Revenue',
            fill:true,
            data: [20, 30, 52, 50, 70, 65],
            borderWidth: 3,
            backgroundColor: 'rgba(128,128,128,0.9)',
            borderColor:'rgba(255,255,255,0.9)'
        },
        ]
        },
        options: {
            plugins:{
                legend:{
                    labels:{
                        color:'white'
                    }
                }
            },
            scales:{
                x:{
                    grid:{
                        color:'dimgray'
                    },
                    ticks:{
                        color:'white'
                    }
                },
                y:{
                    grid:{
                        color:'dimgray'
                    },
                    ticks:{
                        color:'white'
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
        var ctx3 = document.getElementById('myChart3');

        new Chart(ctx3, {
            type: 'pie',
            data:{ 
                labels: [
                    'Italy',
                    'France',
                    'Spain',
                    'USA',
                    'Argentina'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [55, 50, 44,24,15],
                    backgroundColor: [
                        'rgb(255,0,0)',
                        'rgb(255,165,0)',
                        'rgb(255,255,0)',
                        'rgb(0,255,0)',
                        'rgb(0,0,255)'
                    ],
                    hoverOffset: 4
                }]
            },
            options:{
                responsive:true,
                maintainAspectRatio:false
            }                   
        });

        var ctx4 = document.getElementById('myChart4');

        new Chart(ctx4, {
            type: 'doughnut',
            data: {
                labels: [
                    'Italy',
                    'France',
                    'Spain',
                    'USA',
                    'Argentina'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [55, 50, 44,24,15],
                    backgroundColor: [
                        'rgb(255,0,0)',
                        'rgb(255,165,0)',
                        'rgb(255,255,0)',
                        'rgb(0,255,0)',
                        'rgb(0,0,255)'
                    ],
                    hoverOffset: 4
                }]
            },
            options:{
                responsive:true,
                maintainAspectRatio:false
            }                    
        });
    