// for class component
// import React, { Component, } from 'react';

// for functional component
import React, { useEffect, useState} from 'react';



// class Migration extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             age: '',
//             location: ''
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(e) {
//         e.preventDefault();
//         const { name, value } = e.target;
//         this.setState({ ...this.state, [name]: value })
//     }


//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="name" /> <br />  <br /> {''}
//                     <input type="text" name="age" value={this.state.age} onChange={this.handleInputChange} placeholder="age" />  <br />   <br />{''}
//                     <input type="text" name="location" value={this.state.location} onChange={this.handleInputChange} placeholder="location" />  <br /> <br />
//                 </div>

//                 <br/>

//                 <div>
//                     {/* Preview */}
//                     Name: {this.state.name} <br/>
//                     Age: {this.state.age} <br/>
//                     Location: {this.state.location}
//                 </div>
//             </React.Fragment>
//         )
//     }
// }


function Migration () {

    const [userInfo, setUserInfo] = useState({
        name: '',
        age: '',
        location: ''
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setUserInfo({...userInfo, [name]: value });
    }

        return (
            <React.Fragment>
                <div>
                    <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} placeholder="name" /> <br />  <br /> {''}
                    <input type="text" name="age" value={userInfo.age} onChange={handleInputChange} placeholder="age" />  <br />   <br />{''}
                    <input type="text" name="location" value={userInfo.location} onChange={handleInputChange} placeholder="location" />  <br /> <br />
                </div>

                <br/>

                <div>
                    {/* Preview */}
                    Name: {userInfo.name} <br/>
                    Age: {userInfo.age} <br/>
                    Location: {userInfo.location}
                </div>
            </React.Fragment>
        )
}

export default Migration;
