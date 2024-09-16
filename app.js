function imgSlider(anything)
{
    document.querySelector('.iPhone').src = anything;
}

function changeColor(color)
{
    const circle = document.querySelector('.circle');
    circle.style.background = color;
    const learn = document.querySelector('.learn');
    learn.style.background = color;
    const iphone = document.querySelector('.i16');
    iphone.style.color = color;
}