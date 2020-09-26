let internalUsers = [{
        fullname: "Abdulahi Nusaybah",
        email: "Abdulahinusaybah@gmail.com",
        pics: " 1.jpg",
        phone: "0788881"
    },

    {

        fullname: "Abdulahi Abdulahi",
        email: "Abdulahijnr@gmail.com",
        pics: " 2.jpg",
        phone: "12236"
    }
]
usersCont = " ";
for (i = 0; i < internalUsers.length; i++) {
    usersCont = +`
    <div>
      
      <img src= "${internalUsers[i].pics}" style="max-height:100px"</img><br>
      <strong>fullname</strong> : "${internalUsers[i].fullname}"<br>
    
       <strong>email</strong> : "${internalUsers[i].email}"<br>
         
      <strong>phone</strong> : "${internalUsers[i].phone}"<br>
         
    
    </div>
    
    `
}
document.getElementById("users") = usersCont

    <
    /script> < /
    body > <
    /html>