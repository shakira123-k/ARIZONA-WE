const form  = document.getElementById('contactForm');
form.addEventListener('submit',function(event){
   const Fullname= document.getElementById('Fullname').value.trim();
    const Email= document.getElementById('Email').value.trim();
    const Telephone= document.getElementById('Telephone Number').value.trim();
    const Message= document.getElementById('Message').value.trim();
    
if(!Fullname || !Email|| !Telephone ||!Message){
    alert("Please fill out all the information needed!");
    event.preventDefault();
    return;
    
}

    const nameRegex =/^[A-Za-z\s]+$/;
if(!nameRegex.test(Fullname)){
    alert("Name can only contain alphabetical letters and spaces.");
    event.preventDefault();
    return;
}
const TelephoneRegex = /^[0-9]+$/;
if(!nameTelephoneRegex.test(Telephone)){
    alert("Telephone can only contain numbers.");
    event.preventDefault();
    return;
}
alert("!Form submitted successfully!");
});


