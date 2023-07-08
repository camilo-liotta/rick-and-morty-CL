const validation = (userData) => {

    const errors = {};

    if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userData.email) || !userData.email || userData.email.lenght > 35) {
        errors.email = 'Enter a valid email';
    }
    if(!userData.email) {
        errors.email = 'Enter an email';
    }
    if(userData.email.lenght > 35) {
        errors.email = 'Enter a valid email';
    }


    if( !/^(?=.*[0-9])[a-zA-Z0-9]{6,10}$/.test(userData.password) ) {
        errors.password = 'Enter a valid password';
    }

    return errors;

}

export default validation;