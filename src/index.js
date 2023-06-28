document.addEventListener("DOMContentLoaded", function (){
    fetch('http://localhost:3000/ramens')
    .then(res => (res.json)())
    .then(function (data){
        let ramenMenu = document.getElementById('ramen-menu')
        data.forEach(function (ramen){
            let image = document.createElement('img')
            image.src = ramen.image
            image.alt = ramen.ramenMenu
            image.addEventListener('click', function(){
                displayRamenDetails(ramen)
            })
            ramenMenu.appendChild(image)
        })
    }) 
})

function displayRamenDetails(ramen){
    let detailImage = document.getElementsByClassName('detail-image')
    let name = document.getElementsByClassName('name')
    let restaurant = document.getElementsByClassName('restaurant')
    let ratingDisplay = document.querySelector('rating-display')
    let commentDisplay = document.querySelector('comment-display')

    detailImage.src = ramen.image
    detailImage.alt = ramen.name
    name.innerHTML = ramen.name
    restaurant.innerHTML = ramen.restaurant
    ratingDisplay.innerHTML = ramen.rating
    commentDisplay.innerHTML = ramen.comment

}

let addNewRamen = document.getElementById('new-ramen')
addNewRamen.addEventListener('submit', (e) => {
    e.preventDefault()

    let newName = document.getElementById('new-name').value
    let newRestaurant = document.getElementById('new-restaurant').value
    let newImage = document.getElementById('new-image').value
    let newRating = document.getElementById('new-rating').value
    let newComment = document.getElementById('new-comment').value

    let newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
    }

    let ramenMenu = document.getElementById('ramen-menu')
    let image = document.createElement('img')
    image.src = newRamen.image
    image.alt = newRamen.name
    image.addEventListener('click', function(){
        displayRamenDetails(newRamen)
    })

    ramenMenu.appendChild(image)
    addNewRamen.reset()

})
