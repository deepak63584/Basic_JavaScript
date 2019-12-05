import React from 'react';
class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Welcome to the shop! {this.props.name}</h1>
                <ul>
                    <li><h2>Shopping List for</h2></li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>FaceBook</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;
