const requestProj = "js/projects.json";

fetch(requestProj)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    const projectGrid = jsObject['projects'];

    projectGrid.forEach(project => {
      const descriptionArray = project.description;
      let ulList = document.createElement('ul');
      descriptionArray.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        ulList.append(li);
      })

      let card = document.createElement('section');
      let title = document.createElement('h3');
      let subtitle = document.createElement('h4');

      if (project.image == 'none' && project.video != null) {
        let videoDiv = document.createElement('div');
        videoDiv.innerHTML = `<iframe class="vidbox" width="450" height="450" src="${project.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""> </iframe>`;
        let videoBox = document.createElement('div');
        videoBox.append(videoDiv);
        card.append(videoBox);
      }

      let image = document.createElement('img');
      let imgsrc = "images/" + project.image;
      let a = document.createElement('a');
      title.textContent = project.name;
      subtitle.textContent = project.sub;
      a.textContent = "";

      card.append(a);
      a.append(image)
      card.append(title);
      card.append(subtitle);
      card.append(ulList);

      a.setAttribute('href', project.website);
      a.setAttribute('target', '_blank');
      image.setAttribute('src', imgsrc);
      image.setAttribute('alt', title);
      document.querySelector('.projects-container').append(card);
    })
  })