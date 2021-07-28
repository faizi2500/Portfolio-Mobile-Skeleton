const projectList = {
  firstProject: {
    image: {
      imageUrl: './assets/images/work-project1.png',
      altText: 'This image is a project thumbnail',
      modalImage: './assets/images/modal-img',
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
      modalImage: './assets/images/modal-img',
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
      modalImage: './assets/images/modal-img',
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
      modalImage: './assets/images/modal-img',
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
      modalImage: './assets/images/modal-img',
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
      modalImage: './assets/images/modal-img',
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

const projects = [
  projectList.firstProject,
  projectList.secondProject,
  projectList.thirdProject,
  projectList.forthProject,
  projectList.fifthProject,
  projectList.sixthProject,
];

function modalFunction(number) {
  const modalDisplay = document.querySelector('#modal');
  modalDisplay.classList.toggle('invisible');
  const modaltitle = document.querySelector('.modal-heading');
  const modallist = document.querySelector('.modal-list');
  modallist.innerHTML = '';
  const modalImg = document.querySelector('.img');
  const modalDesc = document.querySelector('.modal-p');
  const buttonLive = document.querySelector('.f-icon-1');

  modaltitle.innerHTML = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[number].languages[i];
    modallist.appendChild(list);
  }
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[number].liveVersion}', '_blank');`,
  );
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[number].sourceCode}', '_blank');`,
  );
  modalDesc.innerHTML = projects[number].description;

  modalImg.setAttribute(
    'src',
    `${projects[number].image.modalImage + (number + 1)}.png`,
  );
}

function toggle() {
  const card = document.querySelector('#modal');
  card.classList.toggle('invisible');
}

modalFunction(1);
toggle();
