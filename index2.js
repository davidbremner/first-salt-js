function greet(namePassedIn) {
    if (namePassedIn === '') {
        return 'ERROR: Name must be entered!';
    } else if (namePassedIn.includes('and')) {
        return `Welcome to SALT you two, ${namePassedIn}`;
    } else {
        return `Welcome to SALT, ${namePassedIn}`;
    }
}


module.exports.greet = greet;