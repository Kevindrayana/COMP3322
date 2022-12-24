function validation() {
    // Step 2: Check the validity of user input
    
    let validity = true;
    if(!document.getElementById('q1-yes').checked && !document.getElementById('q1-no').checked){
        document.getElementById('q1').classList.add('invalid');
        validity = false;
    }
    if (!document.getElementById('q2-www').checked && !document.getElementById('q2-html').checked && !document.getElementById('q2-javascript').checked && !document.getElementById('q2-nodejs').checked && !document.getElementById('q2-mongodb').checked && !document.getElementById('q2-react').checked){
        document.getElementById('q2').classList.add('invalid');
        validity = false;
    }
    if (isNaN(document.getElementById('q3-num').value)){
        document.getElementById('q3').classList.add('invalid');
        validity = false;
    }   

    return validity;

}

// Step 3. Handle input events
document.getElementById("q1").addEventListener("input", function() {
    if(document.getElementById('q1-yes').checked || document.getElementById('q1-no').checked){
        document.getElementById('q1').classList.remove('invalid');
    }
})


document.getElementById("q2").addEventListener("input", function() {
    if (document.getElementById('q2-www').checked || document.getElementById('q2-html').checked || document.getElementById('q2-javascript').checked || document.getElementById('q2-nodejs').checked || document.getElementById('q2-mongodb').checked || document.getElementById('q2-react').checked){
        document.getElementById('q2').classList.remove('invalid');
    }
})


document.getElementById("q3").addEventListener("input", function() {
    if (!isNaN(document.getElementById('q3-num').value)){
        document.getElementById('q3').classList.remove('invalid');
    }   
})

document.querySelector('form').addEventListener("reset", function() {
    document.getElementById('q1').classList.remove('invalid');
    document.getElementById('q2').classList.remove('invalid');
    document.getElementById('q3').classList.remove('invalid');
})