const homeScore = document.querySelector(".home-score")
const guestScore = document.querySelector(".guest-score")

const homeBtn1 = document.querySelector(".home-btn1")
const homeBtn2= document.querySelector(".home-btn2")
const homeBtn3=document.querySelector(".home-btn3")

const guestBtn1=document.querySelector(".guest-btn1")
const guestBtn2=document.querySelector(".guest-btn2")
const guestBtn3=document.querySelector(".guest-btn3")

let countHome = 0 
let countGuest = 0

homeBtn1.addEventListener("click",()=>{
  countHome+=1
  homeScore.textContent = countHome
  
})

homeBtn2.addEventListener("click",()=>{
    countHome+=2
    homeScore.textContent = countHome
    
  })
  

  homeBtn3.addEventListener("click",()=>{
    countHome+=3
    homeScore.textContent = countHome
    
  })
  
  
guestBtn1.addEventListener("click",()=>{
  countGuest+=1
  guestScore.textContent = countGuest
  
})

guestBtn2.addEventListener("click",()=>{
  countGuest+=2
  guestScore.textContent = countGuest
  
})

guestBtn3.addEventListener("click",()=>{
  countGuest+=3
  guestScore.textContent = countGuest
  
})

  
