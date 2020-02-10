import React from 'react';
import classNames from 'classnames'

// Styles
import './../styles/Modal.scss'

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    showModal() {
        this.setState({
            isOpen: true
        })

        if(this.props.onShow) this.props.onShow()
    }

    hideModal() {
        this.setState({
            isOpen: false
        })

        if(this.props.onHide) this.props.onHide()
    }

    _getCloseBtn() {
        if(this.props.closeButton == false) return false

        return (
            <div
                className="close-btn-modal"
                onClick={() => this.hideModal()}
                style={ this.props.styleCloseButton }
            >✖</div>
        )
    }

    _getTitle() {
        if(!this.props.title) return false

        return (
            <div
                className="title-modal"
                style={ this.props.styleTitle }
            >
                { this.props.title }
            </div>
        )
    }

    _getBtn() {
        if(!this.props.buttons) return false

        var _buttons = []

        for (let i = 0; i < this.props.buttons.length; i++) {
            const _button = this.props.buttons[i];
            
            _buttons.push(
                <button
                    className={"btn-modal " + (_button.type || "default")}
                    onClick={ () => { if(_button.onClick) _button.onClick() }}
                    style={_button.style}
                >
                    { _button.value }
                </button>
            )
        }

        return (
            <div className="modal-btn-ctner">
                { _buttons }
            </div>
        )
    }

    render() {
        return (
            <div
                className={classNames({
                    "modal-container" : true,
                    "open": this.state.isOpen
                })}
                style={ this.props.styleContainer }
            >
                <div
                    className="overlay-modal"
                    style={ 
                        this.props.styleOverlay
                    }
                    onClick={ (e) => {
                        if(this.props.hideClickOutside) {
                            this.hideModal()
                        }
                    }}
                ></div>

                <div
                    className="container-modal"
                    style={ this.props.styleContent }
                    onClick={ (e) => {
                    }}
                >
                    { this._getTitle() }

                    { this._getCloseBtn() }

                    <div className="content-modal">
                        { this.props.children }
                    </div>

                    { this._getBtn() }
                </div>
            </div>
        );
    };
}

export default Modal;
