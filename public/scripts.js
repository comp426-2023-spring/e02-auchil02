// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function resetChoices() {
    // Reset game type radio buttons
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
  
    // Reset opponent checkbox
    document.getElementById("compYes").checked = false;
    document.getElementById("compNo").checked = false;
  
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

function play() {
    // Get the game type
    const gameForm = document.getElementById("game-form");
    const gameType = gameForm.elements["game"].value;
  
    // Get the shot
    const shotForm = document.getElementById("shot-form");
    const shot = shotForm.elements["shot"].value;
  
    // Get the opponent type
    const computerForm = document.getElementById("computer-form");
    const isComputer = computerForm.elements["computer"].value === "compYes";
  
    // Construct the endpoint URL based on the game type and opponent type
    let endpoint = "/app/" + gameType + "/play";
    if (isComputer) {
      endpoint += "?shot=" + shot;
    }
  
    // Make the HTTP request to the server
    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        // TODO: Update the UI to show the game result
      })
      .catch((error) => {
        console.error(error);
        // TODO: Handle the error by displaying an error message to the user
      });

    const resultElem = document.getElementById('result');
    resultElem.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. The winner is ${winner}!`;
  }  