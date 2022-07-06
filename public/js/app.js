

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message_1=document.getElementById('message-1')
const message_2=document.getElementById('message-2')

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const location=search.value   
  fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message_1.innerHTML=data.error
            message_2.innerHTML=null

        }
        else{
            message_1.innerHTML=data.location
            message_2.innerHTML=data.forecast
        }

    })
})
})