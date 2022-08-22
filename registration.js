export function registration(email, password, password2) {
    const userData = {
        login: `${email}`,
        createPassword: `${password}`,
        confirmPassword: `${password2}`, 
    };

    const url = 'https://immense-badlands-47107.herokuapp.com';
    const urlSignUp = '/auth/signUp';

    function signUp() {
        fetch(url + urlSignUp, {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            location.reload();
        })
        .catch((error) => alert(error.message));
    }
    signUp();

}