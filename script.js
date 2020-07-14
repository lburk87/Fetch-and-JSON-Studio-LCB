// TODO: add code here
window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      for (i = 0; i < 7; i++) { 
      let bigDiv = document.getElementById("container");
      let newDiv = document.createElement("div");
      newDiv.class = "astronaut";
      let newDiv2 = document.createElement("div");
      newDiv2.class = "bio";
      bigDiv.appendChild(newDiv);
      newDiv.appendChild(newDiv2);
      newDiv2.innerHTML = `
       <div class="astronaut">
        <div class="bio">
           <h3>${json[i].firstName + " " + json[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${json[i].hoursInSpace}</li>
              <li>Active: ${json[i].active}</li>
              <li>Skills: ${json[i].skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${json[i].picture}">
       </div>`;
     };
    });
  });
});