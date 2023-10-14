const colorChoices=['#3498DB','#D5DBDB','#2ECC71','#9B59B6','F1C40F','31A2AC','#9B59B6']ꓼ

function getRandomColor(){
    const randomIndex = Math.floor(Math.random()* colorChoices.length)ꓼ
    return colorChoices[randomIndex]ꓼ
}

function changeFormBackgroundColor(){
    const form = document.getElementById('myform');
    const randomColor = getRandomColor()ꓼ
    form.style.backgroundColor = randomColorꓼ
}

setInterval(changeFormBackgroundColor,2000)ꓼ