// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function resetChoices() {
    // Reset game type radio buttons
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
  
    // Reset opponent checkbox
    document.getElementById("opponent").checked = false;
  
    // Reset shots radio buttons
    document.getElementById("rock").checked = false;
    document.getElementById("paper").checked = false;
    document.getElementById("scissors").checked = false;
    document.getElementById("lizard").checked = false;
    document.getElementById("spock").checked = false;
}
  
function showRules() {
    window.location.href = "rules.html";
}  

function goBack() {
    window.location.href = "index.html";
}

