document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'IPT Project', technology: 'C#' },
        { name: 'Booking App', technology: 'Java' },
        { name: 'Sea for Thieves', technology: 'Node.js' },
        { name: 'FYP', technology: 'Python' },
       
    ];

    const filterInput = document.getElementById('filter');
    const projectList = document.getElementById('projectList');

    function displayProjects(projects) {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = `${project.name} (${project.technology})`;
            projectList.appendChild(li);
        });
    }

    filterInput.addEventListener('input', () => {
        const filterText = filterInput.value.toLowerCase();
        const filteredProjects = projects.filter(project => 
            project.technology.toLowerCase().includes(filterText)
        );
        displayProjects(filteredProjects);
    });

    displayProjects(projects); 
});
