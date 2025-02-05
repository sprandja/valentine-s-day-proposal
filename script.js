import confetti from 'https://cdn.skypack.dev/canvas-confetti';
const yesBtn = document.querySelector('.yes-Btn');
const noBtn = document.querySelector('.no-Btn');
const question = document.querySelector('h2');
const imag = document.getElementById('img');
const btnwrapper = document.querySelector('.button-group');
const wrapper = document.querySelector('.container');


var clickedCount = 0;
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () =>
    {
        question.innerHTML = 'Yayyy!! :3  See you soon sweetheart ;)';
        btnwrapper.innerHTML='';
        imag.src = './Img/Doom guy blush.jpg';
        confetti();
    })

noBtn.addEventListener('click', () =>
    {
        switch(clickedCount)
            {
                case 0:
                    question.innerHTML = "That wasn't a question";
                    imag.src = "./Img/threaten_cat.jpg";
                    clickedCount++;
                    break;
                case 1:
                    question.innerHTML = "Pleasee";
                    imag.src = "./Img/cuddles.jpg"
                    clickedCount++;
                    break;
            }
        if(clickedCount>=2) question.innerHTML+="e";
        const i = Math.floor(Math.random()*(wrapperRect.width-noBtnRect.width))+1;
        const j = Math.floor(Math.random()*(wrapperRect.height-noBtnRect.height))+1;

        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    })
