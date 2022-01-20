import React, { Component, createContext } from 'react';

export const BtnLogicContext = createContext();
class BtnLogicContextProvider extends Component {
    state = {
        btnLogic: true
    }
    clickToCloseNav = () => {
        this.setState({ btnLogic: !this.state.btnLogic })
    }

    render() {
        return (
            <BtnLogicContext.Provider value={{ ...this.state, clickToCloseNav: this.clickToCloseNav }}>
                {this.props.children}
            </BtnLogicContext.Provider>
        );
    }
}

export default BtnLogicContextProvider;

