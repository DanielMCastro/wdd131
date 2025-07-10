function displayError(msg) {
	// display error message
	document.querySelector('#errormsg').innerHTML = msg
}

function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function submitHandler(event) {
    event.preventDefault()
    let errormsg = ''
    console.log(this.cardNumber.value)
    displayError('')
    if (isNaN(this.cardNumber.value)){
        errormsg += "Invalid card number.\n"
    }
    else if (!isCardNumberValid(this.cardNumber.value)){
        errormsg += "Incorrect card number.\n"
    }

    //check date
    const currentDate = new Date()
    if ('20' + this.expYear.value < currentDate.getFullYear()) {
        errormsg += 'Card is expired\n'
    }
    else if (this.expMonth.value < currentDate.getMonth()) {
        errormsg += 'Card is expired\n'
    }

    if (errormsg !== '') {
        displayError(errormsg)
        return false
	}
    return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)


