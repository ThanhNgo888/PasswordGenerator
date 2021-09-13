//generate random password
function generate(){
    //set password length/complexity with the id = slider and grab the value
    let complexity = document.getElementById("slider").value;

    //possible password values to generate the password
    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    //when a user hits the generate button,this variable will get set
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <=complexity; i++){
        //minus 1 because we started from 0
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//function to copy password to clipboard
function clipboardPW(){
    document.getElementById("display").select();
    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}
