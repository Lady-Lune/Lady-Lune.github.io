// Fetch and display projects from project-details.json
fetch('project-details.json')
	.then(response => response.json())
	.then(data => {
		const projects = data.projects;
		const projectCount = projects.length;
		const container = document.getElementsByClassName('solar-system')[0];
		projects.forEach((project, i) => {
			const title = project.title;
			const description = project.description;
			const delay = i * (10 / projectCount);
			const link = document.createElement('a');
			link.id = 'projectpage-link';
			link.href = 'projects.html';
			link.style.animationDelay = `${delay}s`;
			const projectDiv = document.createElement('div');
			projectDiv.className = 'project';
			const contentDiv = document.createElement('div');
			contentDiv.className = 'project-content';
			contentDiv.innerHTML = `${title}<hr/>${description}`;
			projectDiv.appendChild(contentDiv);
			link.appendChild(projectDiv);
			container.appendChild(link);
		});
		// document.body.appendChild(container);
	})
	.catch(error => console.error('Error loading projects:', error));
