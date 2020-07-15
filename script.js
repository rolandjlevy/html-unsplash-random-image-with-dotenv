document.addEventListener('DOMContentLoaded', (e) => {

  const url = `https://api.unsplash.com/photos/random?client_id=${key}&w=300`;

  const img = document.querySelector('.random-img'); 
  img.width = '300';

  const btn = document.querySelector('.btn'); 

  btn.addEventListener('click', (e) => {
    getImage(url).then(data => {
      const { width, height, description, urls, links } = data;
      img.src = urls.regular;
    }).catch(error => {
      console.log({error});
    });
  });

  btn.click();
  
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