# react-modal-customizable <!-- omit in toc -->
This module allows to integrate a modals simply and customize.

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Examples](#examples)
- [Props](#props)
  - [General](#general)
  - [Buttons](#buttons)
  - [Style](#style)
  - [Callbacks](#callbacks)
- [Functions](#functions)
  - [showModal()](#showmodal)
  - [hideModal()](#hidemodal)

## Installation
To install, you can use npm or yarn:
```
$ npm install react-modal-customizable
$ yarn add react-modal-customizable
```

## Examples
``` js
import React from 'react';
import Modal from 'react-modal-customizable'

class Exemple extends React.Component {
    render() {
        return (
            <div className="development-screen screen">
                <Modal
                    ref={(modal) => this.modal = modal}
                    styleOverlay={{
                        backgroundColor: "black"
                    }}
                    styleContent={{
                        backgroudColor: "green"
                    }}
                    closeButton={true}
                    title="Your title"
                >
                    <div>Your content</div>
                </Modal>

                <button
                    onClick={ () => this.modal.showModal() }
                >
                    Show the modal
                </button>
            </div>
        )
    };
}

export default Example;
```

## Props
### General
|    Props    | Description                          |  Type   | Default |
| :---------: | :----------------------------------- | :-----: | :-----: |
| closeButton | Use to show or hide the close button | Boolean |  true   |
|    title    | Use to set a title in the modal      | String  |  null   |

### Buttons
|  Props  | Description                 | Type  | Default |
| :-----: | :-------------------------- | :---: | :-----: |
| buttons | Use to set multiple button. | Array |   []    |

#### Exemple : <!-- omit in toc -->
``` js
<Modal
    buttons={
        [
            ...
            {
                value: "Delete",
                onClick: yourFunction,
                style: {
                    fontSize: "2rem"
                },
                type: "primary" 
            }
            ...
        ]
    }
/>
```
#### Parameters of the buttons <!-- omit in toc -->
|  Props  | Description                                                                                                         |   Type   |  Default  |
| :-----: | :------------------------------------------------------------------------------------------------------------------ | :------: | :-------: |
|  value  | Text in the button.                                                                                                 |  String  |   null    |
| onClick | Action of the click.                                                                                                | Function |   null    |
|  style  | Style of the button.                                                                                                |  Object  |    {}     |
|  type   | Type of the button. <br/> ("primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link") |  String  | "default" |


### Style
|      Props       | Description                                 |  Type  | Default |
| :--------------: | :------------------------------------------ | :----: | :-----: |
|   styleOverlay   | Use to change the style of the overlay      | Object |   {}    |
|   styleContent   | Use to change the style of the content      | Object |   {}    |
|    styleTitle    | Use to change the style of the title        | Object |   {}    |
| styleCloseButton | Use to change the style of the close button | Object |   {}    |


### Callbacks
|      Props       | Description                                 |  Type  | Default |
| :--------------: | :------------------------------------------ | :----: | :-----: |
|   onShow   | Callback fired after show the modal.      | Function |   null    |   
|   onHide   | Callback fired hide show the modal.      | Function |   null    |   

## Functions
### showModal()
Use to show the modal.
``` js
this.modal.showModal()
```

### hideModal()
``` js
this.modal.hideModal()
```