document.addEventListener("DOMContentLoaded", function(){  // handlePageLoad()


    document.addEventListener("click", 
    
     // Remember, this a Function - A Callback Function
     (event)=>{ 
         
      //   console.log("THIS IS THE WHOLE EVENT OBJECT USING JUST (event) 👉{🧶} ", event) 
        
      //   console.log("💻🔬👀:: You Just Clicked On This With (event.target) == ", event.target) 
            // console.log(`💻🔬👀:: You Just Clicked On  ${event.target}  With (event.target) `) 
            ////  Remember! Interpolation Gives Us JavaScript Notation (An Object)
        
      //   console.log("💻🔬👀:: What's In There With (textContent) 👉  ", event.target.textContent) 
      //   console.log("💻🔬👀:: What's In There With (innerText) 👉  ", event.target.innerText) 
      //   console.log("💻🔬👀:: What's In There With (innerHTML) 👉  ", event.target.innerHTML) 

    }  )
    ////  'Listen To TheDOM🌌🧘🌠👁✨'




    const submitOnForm1 = document.querySelector("#submit1")
    //const submitOnForm1 = document.getElementById("submit1")
    //const submitOnForm1 = document.querySelector("input#submit1")
          console.log(submitOnForm1)

    // we need an eventListener


    const form1 = document.querySelector(".form1")
          console.log(form1)
          
         form1.addEventListener("submit", (event)=>{  event.preventDefault()
               console.log("SUBMIT EVENT:  ", event.target)


               console.log("IN NAME FIELD:  ", event.target.name) 
               console.log("IN NAME FIELD:  ", event.target.name.value)
               let pokemonName = event.target.name.value 
            
               console.log("IN POKEMONTYPE FIELD:  ", event.target.pokemonType) 
               console.log("IN POKEMONTYPE FIELD:  ", event.target.pokemonType.value)
               let pokemonType = event.target.pokemonType.value
               
               
               let newPokemon ={

                  nameForNewPoke: pokemonName,
                  pokemonTypeForNewPoke: pokemonType

               }
               console.log(newPokemon)

               // put in array *****

            
            })

      //     form1.addEventListener("click", (event)=>{  event.preventDefault()
      //           console.log("CLICK EVENT:  ", event.target) })
      //       //     will need event.preventDefault()


    















//// From Sunday 7-25-2021 


//     const divWithTheMudkip = document.querySelector("div")
//         // "A Puppet String", As Sam Would Say 🙆🏾‍♂️
//           console.log(divWithTheMudkip)
//         //   divWithTheMudkip.textContent = "What Ever We Want To Change It To"
//         //   divWithTheMudkip.innerText = "What Ever We Want To Change It To"
//         //   divWithTheMudkip.innerHTML = "What Ever We Want To Change It To"


//         // divWithTheMudkip.textContent = '<img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />'
//         // divWithTheMudkip.innerText = '<img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />'
          
//         // divWithTheMudkip.innerHTML = '<img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />'
//         // divWithTheMudkip.innerHTML = `<img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />`


//     //X// A NO-GO
//     // const theActualMudkip = divWithTheMudkip
//     //       console.log(theActualMudkip)

//     const theActualMudkip = document.querySelector("img")
//           theActualMudkip.id = "mudkip"
//           console.log(theActualMudkip)



//           const theActualMudkipQ = divWithTheMudkip.querySelector("img")
//                 console.log(theActualMudkipQ)



//           const theActualMudkipQID = document.querySelector("#mudkip")
//                 console.log(theActualMudkipQID)
//           const theActualMudkipGID = document.getElementById("mudkip")
//                 console.log(theActualMudkipGID)

//                 //X// A NO-GO
//                 // const theActualMudkipQIDOffOfDiv = divWithTheMudkip.getElementById("mudkip")
//                 // console.log(theActualMudkipQIDOffOfDiv)




//         const newImage = document.createElement("img")
//               newImage.src = "https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png"
//         console.log(newImage)
//         //X// A NO-GO
//         // newImage.innerHTML = "https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png"
//         // newImage.textContent = "https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png"

//         divWithTheMudkip.append(newImage)


//         const newImage2 = document.createElement("img")
//               newImage2.src = "https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png"
//         console.log(newImage2)

//         const secondAppendDiv = document.querySelector("#second-append-div")
//               console.log(secondAppendDiv)
//         secondAppendDiv.append(newImage2)


//         // SHOW THIS WITH A LOOP - PROPPER - USNG CREATE
//         secondAppendDiv.innerHTML = `
//                 <div>
//                 <h3> WOWZERZ </h3>
//                 <img src="https://cdn.vox-cdn.com/thumbor/8pj1jFOwIyYzITqZh37m8C0Zm2U=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/7997669/Birch_Mudkip.png" alt="">
//                 <h3> YAY </h3>
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <button> CATCH </button>
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 <img src="https://cdn2.bulbagarden.net/upload/thumb/d/d6/May_Torchic.png/250px-May_Torchic.png" />
//                 </div>
//         `









        // APPEND ANOTHER IMAGE - CREATE ELEMENT FLOW 
        // INNERTML












//// FROM FRIDAY  7-23-2021 


    // console.log("Something!")
    
    // const h1AtTheTop = document.querySelector("h1")
    //     console.log(h1AtTheTop)
    //     const secondh1 = document.querySelector("h1")
    //     console.log(secondh1)
    
    // const h1AtTheTopQID = document.querySelector("#please-work")
    //     console.log(h1AtTheTopQID)
    
    //     const h1AtTheTopQCL = document.querySelector(".good-job")
    //     console.log(h1AtTheTopQCL)
    
    
    //     const h1AtTheTopWithID = document.getElementById("please-work")
    //     console.log(h1AtTheTopWithID)
    
    
        // const h1AtTheTopWithClass = document.getElementsByClassName("good-job")
        // console.log(h1AtTheTopWithClass)
    
    
    // h1AtTheTop.textContent = "Whateveryouwantittosay"
    
    
    
    // thingsToAppend = [
    
    //     "thing1",
    //     "thing2",
    //     "thing3"
    
    // ]
    
    
    
    // justRaymond =[
    
    //     { name: "Raymond", favoriteColor: "purple" }
    
    // ]
    
    
    // function loopy(anArray){
    
    //     for(const oneThingOfTheThings of anArray){
    //         console.log(oneThingOfTheThings)
    //         // [ thing1 thing2 oneThingOfTheThings ]
    //     }
    
    // }
    // loopy(thingsToAppend)
    // loopy(justRaymond)
    
    
    
    
    
    
    // us =[
    
    //     { name: "Sam", favoriteColor:"gold" },
    //     { name: "Raymond", favoriteColor: "purple" }
    
    // ]
    // const whatsMyFavColor=(person)=>{
    //     console.log(person)
    
    //     console.log(person.favoriteColor)
    //     // return person.favoriteColor
    
    //     if(person.favoriteColor === "purple"){
    
    //         console.log("Hey! This Person Likes purple: ", person)
    //         console.log(`Hey! ${person.name} Likes purple! :)`)
    //         console.log(`Hey! This Person Likes purple: ${person.name}`)
    
    //     }
    
    //     return person
    
    
    
    //     // const quickCheck = person.favoriteColor === "purple" 
    //     //     console.log(quickCheck)
    
    //     // return person.favoriteColor === "purple" 
    
    // }
    // whatsMyFavColor(us[0])
    // whatsMyFavColor(us[1])




})





