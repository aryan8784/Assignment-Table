var student1 = {
  firstName: "Akmal",
  lastName: "Ahmed",
  age: 20,
  Email : "Akmal@gmail.com",
  id: Math.random()*1,
};

var student2 = {
  firstName: "Abu Bakar",
  lastName: "Aryan",
  age: 10,
  Email : "Abubakar65@gmail.com",
  id: Math.random()*1,
};
var student3 = {
  firstName: "Mobeen",
  lastName: "Javed",
  age: 49,
  Email : "mobeen55@gmail.com",
  id: Math.random()*1,
};
var student4 = {
  firstName: "JhanZeb",
  lastName: "Javed",
  age: 19,
  Email : "Jhanxeb77@gmail.com",
  id: Math.random()*1,
};
var student5 = {
  firstName: "Umair",
  lastName: "Yaqoob",
  age: 30,
  Email : "umiar23@gmail.com",
  id: Math.random()*1,
};
var student6 = {
  firstName: "Hasan",
  lastName: "Hashmi",
  age: 40,
  Email : "hasan897@gmail.com",
  id: Math.random()*1,
};

var student7 = {
  firstName: "Akmal",
  lastName: "Hashmi",
  age: 40,
  Email : "Akaljd@gmail.com",
  id: Math.random()*1,
};


var studentList = [student1, student2, student3, student4, student5,student6,student7];

var text = document.getElementById("text");

function render()
 {
  text.innerHTML = "";

  for (var i = 0; i < studentList.length; i++) {
    text.innerHTML += `<table class="table border border-4 table-warning table-dark text-start table-striped container">
    <thead>
      <tr>
        <th class="text-start"  scope="col">#</th>
        <th class="text-start"  scope="col">FirstName</th>
        <th class="text-start"  scope="col">LastName</th>
        <th class="text-start"  scope="col">Age</th>
        <th class="text-start"  scope="col">Email</th>
        <th class="text-start"  scope="col">ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${i + 1}</th>
        <td  class="text-start">${studentList[i].firstName}</td>
        <td  class="text-start">${studentList[i].lastName}</td>
        <td  class="text-start">${studentList[i].age}</td>
        <td  class="text-start">${studentList[i].Email}</td>
        <td  class="text-start">${studentList[i].id}</td>
      </tr>
        </tbody>
        </table>`
  }
}
render();