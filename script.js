for(let i in cats){
    html = `
    <div class="card">
        <img src="${cats[i].img_link}" alt="" class="main_image ">
        <div class="name">${cats[i].name}</div>
        <div class="age">годиков: ${cats[i].age}</div>
        <div class="rate">${rating(cats[i].rate)}</div>
        <div class="description">${cats[i].description}</div>
    `
    if(cats[i].favourite){
        html += `<img src="images/favourite-heart-svgrepo-com.svg" alt="" class="heart">`
    }

    html += '</div>'
    document.body.innerHTML += html
    i++
}

function rating(rate){
    let hearts = ''
    for(let j = 0; j < 10; j++){
        if (j < rate){
            hearts += `<img src='images/pink_heart.svg' alt="pink heart" class='rate_icon'>`
        }else{
            hearts += `<img src='images/grey_heart.svg' alt="pink heart" class='rate_icon'>`
        }
    }
    return hearts
}
