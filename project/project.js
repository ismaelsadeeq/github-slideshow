function submitMssg() {
    var name='';
    var mail ='';
    var mssg='';
    
    
    name =document.getElementById('name').value; 
    mail =document.getElementById('mail').value;
    mssg=document.getElementById('message').value;
    console.log(name);
    console.log(mail);
    console.log(mssg);
   
    if (name =='') {
        alert('You Must input you Name')
    } else if (mail =='') {
        alert('Please you must provide your Email Address')
    } else if (mssg =='') {
        alert('Message is empty plese write your message');
    } else {
        alert('Your Message has been sent Thank-You');
    }
    
}