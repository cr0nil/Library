import React, { Component } from 'react';
import Frame from 'react-frame-component';

class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy'
        }
    }
    render() {
        return (
            <div>
                <Frame>
                    <h1>Książka</h1>
                    Autor : {this.props.autor}
                    <br/>
                    Tytuł :  {this.props.title}
                </Frame>
            </div>
        );
    }
}
export default Book;