let projects = {
  firstProject: {
    image: {
      imageUrl: './assets/images/work-project1.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Tonic Project: Personalized Reading',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  secondProject: {
    image: {
      imageUrl: './assets/images/work-project2.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Multi Post Stories: Gain + Glory',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  secondProject: {
    image: {
      imageUrl: './assets/images/work-project2.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Multi Post Stories: Gain + Glory',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  thirdProject: {
    image: {
      imageUrl: './assets/images/work-project3.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Health and Fitness Project',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  forthProject: {
    image: {
      imageUrl: './assets/images/work-project4.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Art Printing Portfolio',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  fifthProject: {
    image: {
      imageUrl: './assets/images/work-project4.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Art Printing Portfolio',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },

  sixthProject: {
    image: {
      imageUrl: './assets/images/work-project4.png',
      altText: 'This image is a project thumbnail',
    },
    projectHeading: 'Art Printing Portfolio',
    popupHeading: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectButton: 'See Project',
    liveVersion: 'https://faizi2500.github.io/Portfolio-Mobile-Skeleton/',
    sourceCode: 'https://github.com/faizi2500',
  },
};

const gridDiv = document.querySelector('.container-grid');

function gridFunction(project, index) {
  let cardText = `<div class="section-container1 section-box item-grid">
  <ul class="first-work display-flex-1">
    <li class="project1-image display-flex-width">
      <img
        class="p1"
        src="${project.image.imageUrl}"
        alt=${project.image.altText}
        rel="noopener noreferrer"
      />
    </li>
    <li class="display-flex-width heading-height">
      <h3 class="project-heading">
        <a
          href="#/"
          class="project-heading-color"
          rel="noopener noreferrer"
        >
          ${project.projectHeading}
        </a>
      </h3>
    </li>
    <li class="display-flex-width languages-used">
      <ul class="languages language-flex">`;
  for (let i = 0; i < project.languages.length; i += 1) {
    cardText += `<li>${project.languages[i]}</li>`;
  }

  cardText += `</ul>
    </li>
      <li class="display-flex-width btn-3 btn-project-1">
      <button class="action-button" type="button">See Project</button>
      </li>
  </ul>
</div>`;

  return cardText
}


function modalFunction(project, index) {
  
}

