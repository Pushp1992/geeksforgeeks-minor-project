import React, { useState } from 'react';


const Form = () => {
    const [personInfo, setPersonInfo] = useState({
        username: '',
        age: '',
        location: ''
    });


    const [errorText, setErrorText] = useState({
        username: '',
        age: '',
        location: ''
    });

    const [personList, setPersonList] = useState([]);

    const handleInputChange = (event) => {
        event.stopPropagation();
        const { name, value } = event.target;
        setPersonInfo({ ...personInfo, [name]: value })
    }

    const submitUserInformation = (e) => {
        e.preventDefault();

        // vaidate user input
        const isUserInputValid = validateUserInput(personInfo);

        if (!isUserInputValid) return;

        /* set person list state */


        // optimal way to update element of state array without push
        setPersonList(personList => [...personList, personInfo]);
    }

    const validateUserInput = (userData) => {
        const errorObject = {};

        for (let input in userData) {
            if (userData[input] === '') {
                errorObject[input] = `empty ${input} field`;
            }
        }

        setErrorText(errorObject);

        if (Object.keys(errorObject).length > 0) return false;
        else return true;

    };

    return (
        <React.Fragment>
            <div>
                <h3>User form</h3>
                <input type="text" name='username' placeholder="username" value={setPersonInfo.username} onChange={handleInputChange} />
                <label htmlFor='error-label' name='username' value={errorText.username}>{errorText.username}</label>
                <br /> <br />

                <input type="text" name='age' placeholder="age" value={setPersonInfo.age} onChange={handleInputChange} />
                <label htmlFor='error-label' name='age' value={errorText.age}>{errorText.age}</label>
                <br /> <br />

                <input type="text" name='location' placeholder="location" value={setPersonInfo.location} onChange={handleInputChange} />
                <label htmlFor='error-label' name='location' value={errorText.location}>{errorText.location}</label>
                <br /> <br />

                <button onClick={submitUserInformation}>Submit</button>
            </div>

            {
                personList.length > 0 ?
                    personList.map((person, index) => {
                        return (
                            <div key={index} style={{ border: 'solid 2px green' }}>
                                <pre>{person.username}</pre>
                                <pre>{person.age}</pre>
                                <pre>{person.location}</pre>
                            </div>
                        )
                    })
                    : 'No user info created so far'
            }
        </React.Fragment>
    )
};

export default Form;