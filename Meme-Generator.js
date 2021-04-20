// const form = document.querySelector('#memeForm');
// const imageInput = document.querySelector('input[name = image]')
// const textInput = document.querySelector('input[name = text]')
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(imageInput.nodeValue, textInput.value);
// });

// function makeMeme (image, text) {
//     const meme = document.createElement('div')

// }

const form = document.querySelector('#memeForm');
const userBottomText = document.querySelector('input[name="bottomText"]');
const userTopText = document.querySelector('input[name="topText"]');
const userImg = document.querySelector('input[name="image"]');
const memeImg = document.querySelector('img');
const memeBottomText = document.querySelector('#meme_bottom_text');
const memeTopText = document.querySelector('#meme_top_text');
const results = document.querySelector('#results')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    memeBottomText.innerHTML = userBottomText.value;
    memeTopText.innerHTML = userTopText.value;
    memeImg.src = userImg.value;


});





// function makeMeme() {

//     memeText.innerHTML = userText.value;
//     memeImg.src = "https://ignatiansolidarity.net/wp-content/uploads/2020/08/justice-treee-featured.jpg";


// }