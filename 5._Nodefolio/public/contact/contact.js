// fetch("/api/projects").then(res => res.json()).then(console.log);

// $('form').on('submit', (e) => {
//     e.preventDefault(); // disable the default browser behaviour

//     let name =    $('#name').val().trim();
//     let email =   $('#email').val().trim();
//     let subject = $('#subject').val().trim();
//     let text =    $('#text').val().trim();

//     let data = {
//         name,
//         email,
//         subject,
//         text
//     }
//     console.log(data);
//     //sender data via post til routen
//     $.post('/contact', data, function() {
//         console.log('Server received our data!');
//     });

    

// });


// (async function getProjects() {
//     const response = await fetch("/api/projects");
//     const result = await response.json();
    
//     const projectsDiv = document.getElementById("projects");

//     result.projects.map(project => {
//         const projectDiv = document.createElement("div");

//         const projectTitle = document.createElement("h2");
//         projectTitle.classList.add("project-title");
//         projectTitle.innerText = project.title;

//         const projectDescription = document.createElement("p");
//         projectDescription.classList.add("project-description");
//         projectDescription.innerText = project.description;


//         projectDiv.appendChild(projectTitle);
//         projectDiv.appendChild(projectDescription);
//         projectsDiv.appendChild(projectDiv);
//     });
// })();