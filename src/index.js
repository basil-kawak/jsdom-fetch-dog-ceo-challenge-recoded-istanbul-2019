console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    console.log('the dom has loaded')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(imgUrl)
    .then(res => res.json())
    .then(function(json) {   //----imgUrl then starts here----//
        let arrJson = json['message']
        for (const element of arrJson) {
            let creatImg = new Image(200,200);
            creatImg.src = element; 
            document.getElementById('dog-image-container').append(creatImg);
        }
    })//----imgUrl then ends here----//
    let arrJsLi;
    fetch(breedUrl)
    .then(res => res.json())
    .then(function(json) {
        // console.log(json)
        arrJsLi = json['message'];
        // console.log((arrJsLi))

       

        for (const key in arrJsLi) {
            // console.log(`${key}: ${arrJsLi[key].join(', ')}`)
            let creatLi = document.createElement('li');
            creatLi.innerHTML = `${key}: ${arrJsLi[key].join(', ')}` //key + arrJsLi[key]
            document.getElementById('dog-breeds').appendChild(creatLi);

            creatLi.addEventListener('click', function(){
                creatLi.style.color = 'red'
            })
        
        }
    let newArrAmar = document.querySelectorAll('li'); 
    // console.log(newArrAmar[0].innerText)


    let dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function(event){
        let result = document.querySelectorAll('somthing');
        let dDValue = event.target.value;
       
        // console.log(dDValue);
        for(let key of newArrAmar){
            // console.log(key.innerText.charAt(0));
            if (key.innerText.charAt(0) === dDValue){
                key.style.display ='list-item'
                // console.log(key)
            }else {
                key.style.display='none'
            }


        }

        console.log(arrJsLi)

       

       
    })
    
       
    })
    // console.log(arrJsLi)


    // let dropdown = document.getElementById('breed-dropdown');

    
    // dropdown.addEventListener('change', function(event){
    //     let result = document.querySelectorAll('somthing');
    //     let dDValue = event.target.value;
    //     console.log(dDValue);




       
    // })
    
    // console.log(dropdown)
    // if ()
  




})
//let arrJsLi = json['message'];
// let creatLi = document.createElement('li');
// creatLi.innerHTML = arrJsLi
// document.getElementById('dog-breeds').appendChild(creatLi);


 // let length = dropdown.children.length;
        // let value = dropdown.options[0].innerHTML;
        // alert(value)

        // console.log(length)
        // for (let i = 0; i < length; i++) {
        //     if (dropdown.children[i].selected) {
        //         alert(dropdown.children[i].text)
        //     }
        // }