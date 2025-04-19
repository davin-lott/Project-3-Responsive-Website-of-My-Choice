
/* DISCLAIMER: I wrote all of my own code

CHANGES MADE TO THIS PROJECT

There were no notes for me to improve the javascript for this website from 
the last project. 

I just spent some time organizing my CSS files better. I also organized my 
main.js file. I also made it so my file actually works when the CSS files 
are in their own folder. I also organized my index.html file as well, 
including getting rid of a closing tag that didn't go to anything.

With making the page look better, I added some padding to one of the paragraphs
that was too close to the edges of the page.

I also decided not to make a seperate Javascript file that only switches between
pages. I don't think that I would have anything left for my main.js file if I did 
that and had a seperate file for the validation. So, I decided to keep my page 
switching Javascript on my main.js file. I hope this is okay. It seems like making 
a seperate page file for the Javascript was a suggestion, not a requirement
*/



let onOrOff = false //This is for determining if the theme is already in place
                    //or not. I did this because I didn't just want to copy from 
                    //that y'all gave us to show how to do this. I wanted to
                    //link do it in a way that I understand it.

function changeDaTheme(){
    let newSheet = document.createElement("link")
    if (onOrOff == false){
        let newSheet = document.createElement("link")
        newSheet.rel = "stylesheet"
        newSheet.href = "css/theme.css"
        newSheet.style.id="secondSheet"
        document.getElementsByTagName("head")[0].appendChild(newSheet)
        onOrOff = true
    } else{
        let myHead = document.getElementsByTagName("head")[0]
        myHead.removeChild(myHead.lastChild)
        onOrOff = false
    }
}

function changeDisplayOn(daClassName, newAttribute){
    document.getElementsByClassName(daClassName).item(0).style.display = newAttribute
}

function changeDisplayOff(daClassName){
    document.getElementsByClassName(daClassName).item(0).style.display = "none"
}

function clickedThis(daClassName){
    if (daClassName == "mainpage"){
        changeDisplayOn("mainpage", "grid")
        changeDisplayOff("contactpage")
        changeDisplayOff("questionpage")
        changeDisplayOff("visitorForm")
    }
    if(daClassName == "contactpage" ){
        changeDisplayOff("mainpage")
        changeDisplayOn("contactpage", "grid")
        changeDisplayOff("questionpage")
        changeDisplayOff("visitorForm")
    }
    if(daClassName == "questionpage"){
        changeDisplayOff("mainpage")
        changeDisplayOff("contactpage")
        changeDisplayOn("questionpage", "grid")
        changeDisplayOff("visitorForm")
    }
    if(daClassName == "visitorForm"){
        changeDisplayOff("mainpage")
        changeDisplayOff("contactpage")
        changeDisplayOff("questionpage")
        changeDisplayOn("visitorForm", "flex")
    }
}

function clickmain(){
    clickedThis("mainpage")
}

function clickcontact(){
    clickedThis("contactpage")
}

function clickquestion(){
    clickedThis("questionpage")
}

function clickVisitor(){
    clickedThis("visitorForm")
}
