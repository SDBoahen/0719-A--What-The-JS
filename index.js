console.log("Something!")

const h1AtTheTop = document.querySelector("h1")
    console.log(h1AtTheTop)
    const secondh1 = document.querySelector("h1")
    console.log(secondh1)

const h1AtTheTopQID = document.querySelector("#please-work")
    console.log(h1AtTheTopQID)

    const h1AtTheTopQCL = document.querySelector(".good-job")
    console.log(h1AtTheTopQCL)


    const h1AtTheTopWithID = document.getElementById("please-work")
    console.log(h1AtTheTopWithID)


    const h1AtTheTopWithClass = document.getElementsByClassName("good-job")
    console.log(h1AtTheTopWithClass)


h1AtTheTop.textContent = "Whateveryouwantittosay"



thingsToAppend = [

    "thing1",
    "thing2",
    "thing3"

]



justRaymond =[

    { name: "Raymond", favoriteColor: "purple" }

]


function loopy(anArray){

    for(const oneThingOfTheThings of anArray){
        console.log(oneThingOfTheThings)
        // [ thing1 thing2 oneThingOfTheThings ]
    }

}
loopy(thingsToAppend)
loopy(justRaymond)






us =[

    { name: "Sam", favoriteColor:"gold" },
    { name: "Raymond", favoriteColor: "purple" }

]
const whatsMyFavColor=(person)=>{
    console.log(person)

    console.log(person.favoriteColor)
    // return person.favoriteColor

    if(person.favoriteColor === "purple"){

        console.log("Hey! This Person Likes purple: ", person)
        console.log(`Hey! ${person.name} Likes purple! :)`)
        console.log(`Hey! This Person Likes purple: ${person.name}`)

    }

    return person



    // const quickCheck = person.favoriteColor === "purple" 
    //     console.log(quickCheck)

    // return person.favoriteColor === "purple" 

}
whatsMyFavColor(us[0])
whatsMyFavColor(us[1])
