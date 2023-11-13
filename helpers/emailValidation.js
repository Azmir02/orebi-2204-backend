function emailValidation(email) {
    if (!email) {
        return false;
    }

    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let result = pattern.test(email)

    if (!result) {
        return false;
    }

    return true

}

module.exports = emailValidation;