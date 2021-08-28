// alert('hello world')

// var firestname=prompt('nom')

// console.log(firestname)

// var meteo=confirm('it this very hot')
// console.log(meteo)

// console.log(8**2)
// // console.log(7%2)

// var num=0 
// console.log(num)
// num++
function creatNote() {
    // alert('HI')
    var titelcontent = document.getElementById('input').value
    var textcontent = document.getElementById('textarea').value

    //var titelcontent=prompt('Enter your titel')
    //var textcontent=prompt('Enter your text')
    var notes = document.getElementById('notes')
    //    notes.style.backgroundColor='red'
    var card = document.createElement('div')
    card.setAttribute('class', 'card')
    notes.appendChild(card)
    /********************************************************************** */
    var cardhead = document.createElement('div')
    cardhead.setAttribute('class', 'card-head')
    card.appendChild(cardhead)
    /************************************************************************************ */
    var titlespan = document.createElement('span')
    titlespan.innerHTML = titelcontent
    //titlespan.innerHTML = 'Titre Note'
    cardhead.appendChild(titlespan)
    /****************************************************************** */
    var deletimg = document.createElement('img')
    deletimg.setAttribute('src', 'images.svg')
    deletimg.setAttribute('onclick', 'deletNote(this)')
    cardhead.appendChild(deletimg)
    /******************************************************************** */
    var cardcontent = document.createElement('div')
    cardcontent.setAttribute('class', 'card-content')
    card.appendChild(cardcontent)

    var textspan = document.createElement('span')
    textspan.innerHTML = textcontent
    // textspan.innerHTML = 'Premier Empire ; ses contours sont ensuite modifiés par les régimes qui lui succèd'
    cardcontent.appendChild(textspan)


    //reset  les données
    var titelcontent = document.getElementById('input').value = ''
    var textcontent = document.getElementById('textarea').value = ''

    closePopup()

}




function deletNote(img) {

    var todelet = img.parentNode.parentNode;
    todelet.remove()
}
function showpopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'flex'
}
function closePopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'none'
}