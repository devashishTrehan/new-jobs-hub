import * as React from 'react';
import './TextArea.component.css';
import { TextareaAutosize } from '@material-ui/core';
import classNames from 'classnames';
import { Theme } from '../../Services/App.service';

interface TextFieldState {
    error: string,
    value: string,
    isTouched: boolean,
    isDirty: boolean,
    isFocused: boolean
}


// const styles = {

//     lightFont: {
//         fontSize: 12,
//         color: 'gray'
//     }
// }



class InputArea extends React.Component<any, TextFieldState> {
    static propTypes: { classes: any; };


    constructor(props: any) {
        super(props)
        this.state = {
            value: '',
            error: props?.error,
            isTouched: false,
            isDirty: false,
            isFocused: false,
        }
    }


    static getDerivedStateFromProps(state: any, props: any) {

        return { ...state, error: props.error }
    }


    touchField = () => {
        if (!this.state.isTouched) {
            this.setState({ isTouched: true })
        }

    }

    makeDirty = () => {
        if (!this.state.isDirty) {
            console.log('dirting')
            this.setState({ isDirty: true })
        }
    }

    focusHandler = () => {
        this.setState({ isFocused: true })
        this.touchField();
    }

    blurHandler = () => {
        this.setState({ isFocused: false })
    }

    keyDownHandler = (event: any) => {
        this.setState({ value: event.target.value });
        this.makeDirty();
    }


    render() {

        const { errorMessage } = this.props;
        const isError = this.props.error && this.state.isDirty;


        return (
            <div style={this.props.containerStyle} >
                <div className={'inputWrap'}>
                    <label className={classNames('textLabel', { 'labelFocused': this.state.isFocused || this.state.value })} >{this.props.label}</label>
                    <TextareaAutosize color='secondary'
                        rowsMin={3}
                        rowsMax={5}
                        className={classNames('input')}
                        style={{ width: '100%', borderColor: isError ? Theme.error : 'gray' }}
                        {...this.props} onFocus={() => this.focusHandler()}
                        onKeyDown={(event: any) => this.keyDownHandler(event)}
                        onBlur={() => this.blurHandler()}
                    />
                </div>
                {
                    this.props.error && this.state.isDirty ?
                        <p className='error'><small>{errorMessage}</small></p>
                        : null
                }
            </div >
        );
    }
}


export default InputArea;
