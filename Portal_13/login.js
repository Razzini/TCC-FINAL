var objPeople = [
    {
        username: "49636542698",
        password: "123"
    },
]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            window.location.replace("http://localhost:5000");
        }
        else{
            alert("Login incorreto ou inexistente")
        }
        
    }
}