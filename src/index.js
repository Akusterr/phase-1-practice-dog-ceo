
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(data => renderDogs(data))

const renderDogs = (data) => {
    console.log(data)

    //data.message always us to acces the value to the key 'message' which is the array we want to access

    data.message.forEach(dogUrl => {  //iterate through array '.forEach' 
    //create img tag
      const image = document.createElement('img')
    // set img src to dogUrl aka adding something inside the img tag  
      image.src = dogUrl
      //console.log(image)
    //assign variable to inside of container we want the img in  
      const dogContainer =document.getElementById('dog-image-container')
    // append img tag(and everything in them) to the inside of the container mentioned above
      dogContainer.appendChild(image)
      //console.log(dogContainer)

  })
}


fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(date => renderBreeds(date))

const renderBreeds = (data) => {
    Object.keys(data.message).forEach(breed => {
        let li = document.createElement('li')
        li.innerText = breed
        const ul = document.getElementById('dog-breeds')
        ul.append(li)
        console.log(li)
        li.addEventListener('click', updateColor)
    })
}


const updateColor = (e) => {
    console.log(e)
    e.target.style = "purple"

}


const changeHandler = (e) => {
    const letter = e.target.value
    console.log(letter)
}


const breedDropdown = document.getElementById('breed-dropdown')
breedDropdown.addEventListener('change', changeHandler)