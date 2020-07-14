document.addEventListener('DOMContentLoaded', (e) => {

  const url = `https://api.unsplash.com/photos/random?client_id=${key}&w=300`;

  getImage(url).then(data => {
    const { width, height, description, urls, links } = data;
    const imgWrapper = document.querySelector('.img-wrapper');
    const img = document.createElement('img');
    imgWrapper.appendChild(img);
    imgWrapper.innerHTML = `<img src=${urls.regular} width="300">`;
  }).catch(error => {
    console.log({error});
  });

  function getImage(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(result => result.json())
      .then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  }

});