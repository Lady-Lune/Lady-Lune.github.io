fetch('project-details.json')
	.then(response => response.json())
	.then(data => {
		const projects = data.projects;
		const projectCount = projects.length;
		const container = document.getElementsByClassName('projects')[0];
		
        projects.forEach((project, i) => {
			const title = project.title;
			const description = project.description;
            const tech = project.tech;

            const card = document.createElement('div');
            card.className = 'card';

            const title_section = document.createElement('h4');
			title_section.className = 'project-name';
            title_section.innerHTML = title
            

            const break_line = document.createElement('hr');
			break_line.className = 'break';

            const description_section = document.createElement('p');
			description_section.className = 'project-desc';
            description_section.innerHTML =  description

            const tech_section = document.createElement('p');
			tech_section.className = 'project-tech';
            tech_section.innerHTML = tech;

            
			container.appendChild(card);
			card.appendChild(title_section);
			card.appendChild(break_line);
			card.appendChild(description_section);
			card.appendChild(break_line);
			card.appendChild(tech_section);
            

		});
	})
	.catch(error => console.error('Error loading projects:', error));


    // echo "<div class='card'>
    //             <h4 class='project-name'>$title</h4>
    //             <hr class='break'/>
    //             <p class='project-desc'>$description</p>
    //             <hr class='break'/>
    //             <p class='project-tech'>$tech</p>
    //         </div>";