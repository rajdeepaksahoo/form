console.log('Connected')

document.getElementById('result').style.display = 'none'
let add = ()=>{
    if (document.getElementById('fn').value){
        document.getElementById('show').innerHTML="First Name :- "+  document.getElementById('fn').value;
    }
    if (document.getElementById('ln').value){
        document.getElementById('show1').innerHTML="Last Name :- "+  document.getElementById('ln').value;
    }
    if (document.getElementById('dob').value){
        document.getElementById('show2').innerHTML="Date Of Birth :- "+  document.getElementById('dob').value;
    }
    if (document.getElementById('mail').value){
        document.getElementById('show3').innerHTML="Email Id :- "+  document.getElementById('mail').value;
    }
    
    if (document.getElementById('mob').value){
        document.getElementById('show4').innerHTML="Mobile Number :- "+  document.getElementById('mob').value;
    }
    if (document.getElementById('place').value){
        document.getElementById('show5').innerHTML= "Country :- "+ document.getElementById('place').value;
    }
    
}

let hide=()=>{
    window.location.reload()
    alert('Are You Sure?')
}

validation = () => {
    let x = document.forms['personal_details']['fname'].value;
    if (x == "") {
        alert('You Must Enter First Name...');
    }
    let xx = document.forms['personal_details']['lname'].value;
    if (xx == "") {
        alert('You Must Enter Last Name...');
        return false;
    }
    let xxx = document.forms['personal_details']['dob'].value;
    if (xxx == "") {
        alert('You Must Enter Date Of Birth...');
        return false;
    }
    let y = document.forms['personal_details']['mail'].value;
    if (y == "") {
        alert('You Must Enter Email Valid Id...');
        return false;
    }
    let yy = document.forms['personal_details']['mob'].value.length;
    if (yy > 10||yy<10||yy=="") {
        alert('You Must Enter a Valid Mobile Number...');
        return false;
    }
    let z = document.forms['personal_details']['country'].value;
    if (z == "") {
        alert('You Must Enter The Country...');
        return false;
    }
    document.getElementById('result').style.display = 'inline-block'
    return false
    
}
submit=()=>{
    document.getElementById('forms').onsubmit(false)
}

