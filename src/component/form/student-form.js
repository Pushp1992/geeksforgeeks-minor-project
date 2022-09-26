import React, { Component } from 'react';

const styles = {
    formStyle: {
        margin: '10rem 20rem',
        // minHeight: '15rem',
        display: 'grid',
        backgroundColor: 'whitesmoke',
        alignItems: 'center'
    },
    divTag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: 'red',
        minWidth: '4rem',
        margin: '1rem'
    },
    input: {
        marginLeft: '1rem'
    },
    actionButton: {
        paddingTop: '2rem'
    }
}

class StudentForm extends Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            name: '',
            age: '',
            dob: '',
            gender: '',
            food: '',
            school: '',
            bio: ''
        }
    }

    handleInputChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ ...this.state, [name]: value });
    };

    submitForm(e) {
        e.preventDefault();
        console.log(this.state);
    };

    resetForm(e) {
        e.preventDefault();
        this.form.reset();

        console.log('reset button clicked');
    }

    render() {
        return (
            <form style={styles.formStyle}>
                 <h4>Creating Form</h4>
                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="name">Name:</label>
                    <input style={styles.input} type="text" name='name' value={this.state.name} placeholder="enter name" onChange={this.handleInputChange} />
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="Age">Age:</label>
                    <input style={styles.input} type="number" name="age" value={this.state.age} placeholder="enter age" onChange={this.handleInputChange} />
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="DOB">DOB:</label>
                    <input style={styles.input} type="date" name="dob" value={this.state.dob} onChange={this.handleInputChange} />
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="gender">Gender:</label>
                    Male: <input style={styles.input} type="radio" name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.handleInputChange} />
                    Female: <input style={styles.input} type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.handleInputChange} />
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="School">Food I Love:</label>
                    <select name="food" value={this.food} onChange={this.handleInputChange}>
                        <option value="">select</option>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                    </select>
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="School">School:</label>
                    <input style={styles.input} type="text" name="school" value={this.state.school} placeholder="enter school name" onChange={this.handleInputChange} />
                </div>

                <div style={styles.divTag}>
                    <label style={styles.label} htmlFor="Bio">Bio:</label>
                    <textarea style={styles.input} rows="6" cols="20" type="textArea" name="bio" value={this.state.bio} placeholder="enter bio" onChange={this.handleInputChange} />
                </div>

                <div style={styles.actionButton}>
                    <button name='submit' onClick={this.submitForm}>Submit</button> {''}
                    <button name="reset" onClick={this.resetForm} >Reset</button>
                </div>
            </form>
        )
    }
}

export default StudentForm;
