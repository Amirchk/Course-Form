const customer = document.getElementById("customer");
const course = document.getElementById("course");
const AuthorName = document.getElementById("AuthorName");
let Submissions = document.getElementById("container");
//let CustomerName = document.getElementById("CustomerName");
//let Coursename = document.getElementById("CourseName");
//let AuthorIdName = document.getElementById("AuthorIDName");

function Submission() {
    let CName = document.createElement("H3");
    let span = document.createElement("SPAN");
    Submissions.appendChild(span);
    span.appendChild(CName);
    CName.innerHTML = customer.value;
    
    let CourseName = document.createElement("H3");
    let courseSpan = document.createElement("SPAN");
    Submissions.appendChild(courseSpan);
    courseSpan.appendChild(CourseName);
    CourseName.innerHTML = course.value;
    
    let Author_Name = document.createElement("H3");
    let AuthorSpan = document.createElement("SPAN");
    console.log(AuthorSpan);
    Submissions.appendChild(AuthorSpan);
    AuthorSpan.appendChild(Author_Name);
    Author_Name.innerHTML = AuthorName.value;
    Submissions.style.display = "block";
}