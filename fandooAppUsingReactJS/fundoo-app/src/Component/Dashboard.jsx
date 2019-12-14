import React, { Component } from 'react';
import Navbar from './Navbar';

class Dashboard extends Component {
    render() {
        return (
            // <div className="fullView">
            //     <div className="initialView">
            //         <Container maxWidth="sm">
            //             <div className="containerView">
            //                 <div className="tilteView">
            //                     <form style={{ color: '#4285F4' }}>F</form>
            //                     <form style={{ color: '#DB4437' }}>u</form>
            //                     <form style={{ color: '#F4B400' }}>n</form>
            //                     <form style={{ color: '#4285F4' }}>d</form>
            //                     <form style={{ color: '#0F9D58' }}>o</form>
            //                     <form style={{ color: '#DB4437' }}>o</form>
            //                 </div>
            //                 <text>Welcome to the Dashboard</text>
            //             </div>
            //         </Container>
            //     </div>
            // </div>
            <div>
                <Navbar />
            </div>
        );
    }
}
export default Dashboard;