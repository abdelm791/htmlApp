let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]
// display table
  var html = "<table >";
  html+="<tr>";
  html+= "<th>ID</th>";
  html+="<th>Date de Création</th>";
  html+="<th>Etat</th>";
  html+="<th>Nom</th>";
  html+= "<th>Prénom</th>";
  html+= "<th>Nom d'utilisateur</th>";
  html+= "<th>Matricule</th>";
  html+= "<th>Action</th>";
  html+="</tr>";
for (var i = 0; i < users.length; i++) {
    html+="<tr>";
    html+="<td>"+users[i].id+"</td>";
    html+="<td>"+users[i].createdDate+"</td>";
    html+="<td>"+users[i].status+"</td>";
    html+="<td>"+users[i].firstName+"</td>";
    html+="<td>"+users[i].lastName+"</td>";
    html+="<td>"+users[i].userName+"</td>";
    html+="<td>"+users[i].registrationNumber+"</td>";
    
    html+="</tr>";

}
html+="</table>";
document.getElementById("box").innerHTML = html;

// Get the modal
var modal = document.getElementById("add-user");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function save(){
  var id="123456789";
    id++;
 let user ={
   id: id,
 createdDate: document.getElementById("createdDate").value,
 status: document.getElementById("etat").value,
 firstName: document.getElementById("firstName").value,
 lastName: document.getElementById("lastName").value,
 userName: document.getElementById("userName").value,
 registrationNumber: document.getElementById("registrationNumber").value,

 }
  users.push(user);
  document.forms[0].reset();
  console.log(users);

}