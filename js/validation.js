let acceptableStates = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

class FormPiece{ //this is a class for making eventlisteners and other stuff easier
    constructor(elementID, theErrorID){
        this.itself = document.getElementById(elementID)
        this.inputValue = this.itself.value
        this.error = document.getElementById(theErrorID)
        this.itself.addEventListener("focusin", errorOff(theErrorID))
    }
}

function initValidation() {
    let errorMessage = document.getElementById("errorMessage")
    errorMessage.style.display = "none"

    let firstName = new FormPiece("first-name", "firstError")
    let lastName = new FormPiece("last-name", "lastError")
    let address = new FormPiece("userAddress", "addressError")
    let city = new FormPiece("city", "cityError")
    let state = new FormPiece("state", "emptyState")
    state.itself.addEventListener("focusin", errorOff("wrongState"))
    
    let zip = new FormPiece("zip", "emptyZip")
    zip.itself.addEventListener("focusin", errorOff("invalidNumber"))
    zip.inputValue = Number(zip.inputValue)
    
    let phoneNumber = new FormPiece("phoneNumber", "emptyPhone")
    phoneNumber.itself.addEventListener("focusin", errorOff("impossiblePhone"))
    
    let cellRe = /\(?\d{3}\)?-?\d{3}-?\d{4}/
    let email = new FormPiece("daEmail", "emptyEmail")
    email.itself.addEventListener("focusin", errorOff("notEmail"))
    let gmailRe = /.+\@.+\..+/
    
    let found = new FormPiece("found", "noSelect")
    
    //Code below checks the form one by one for different things and 
    //flags stuff when an error occurs
    if (firstName.inputValue == ""){
        whenEmpty("First Name Is Required", "firstError")
    } else if (lastName.inputValue == ""){
        whenEmpty("Last Name Is Required", "lastError")
    } else if(address.inputValue == ""){
        whenEmpty("Address Is Required", "addressError")
    } else if(city.inputValue == ""){
        whenEmpty("City Is Required", "cityError")
    } else if(state.inputValue == ""){
        whenEmpty("State Is Required", "emptyState")
    } else if (!(acceptableStates.includes(state.inputValue.toUpperCase()))){
        whenEmpty("Please use classic two letter abbreviations", "wrongState")
    } else if(zip.inputValue == ""){
        whenEmpty("Zip Code Is Required", "emptyZip")
    } else if(zip.inputValue < 10000 | zip.inputValue > 99999 | !(Number.isInteger(zip.inputValue))){
        whenEmpty("Please Use Valid Zip Code", "invalidNumber")
    } else if(phoneNumber.inputValue == ""){
        whenEmpty("Phone Number Required", "emptyPhone")
    } else if(!(cellRe.test(phoneNumber.inputValue))){
        whenEmpty("Please Use Valid Phone Number", "impossiblePhone")
    } else if(email.inputValue == ""){
        whenEmpty("Email Required", "emptyEmail")
    } else if(!(gmailRe.test(email.inputValue))){
        whenEmpty("Please Use Valid Email Address", "notEmail")
    } else if(found.inputValue == "default"){
        whenEmpty("Select How You Found This Site", "noSelect")
    } else{
        let myForm = document.getElementsByClassName("fillOut")
        for (part of myForm){
            part.style.display = "none"
        }
        let thankYou = document.getElementById("thankYou")
        thankYou.innerHTML = "Thank You, " + firstName.inputValue + "!"
        thankYou.style.display = "inline"
    }
}

//function below turns off the errors when they are no longer needed
function errorOff(errorId){
    let toTurnOff = document.getElementById(errorId)
    toTurnOff.style.display = "none"
}


//function below turns on whatever error message that the initValidation
//function tells it to
function whenEmpty(errorStr, errorId){
    errorMessage.innerHTML = errorStr
    let errorParagraph = document.getElementById(errorId)
    errorMessage.style.display = "inline"
    errorParagraph.style.display = "inline"
}