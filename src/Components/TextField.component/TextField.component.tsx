import * as React from 'react';
import './TextField.component.css';
import { InputAdornment, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface TextFieldState {
    error: string,
    isTouched: boolean,
    isDirty: boolean
}


const styles = {

    lightFont: {
        fontSize: 12,
        color: 'gray'
    }
}



class InputField extends React.Component<any, TextFieldState> {
    static propTypes: { classes: any; };


    constructor(props: any) {
        super(props)
        this.state = {
            error: props?.error,
            isTouched: false,
            isDirty: false
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
        this.touchField();
    }

    keyDownHandler = () => {
        this.makeDirty();
    }


    render() {

        const { errorMessage } = this.props;
        const isError = this.props.error && this.state.isDirty;

        let newProps = { ...this.props, error: isError }

        return (
            <div style={this.props.containerStyle} >
                <TextField color='secondary'
                    style={{ width: '100%' }}
                    {...newProps} onFocus={() => this.focusHandler()}
                    InputLabelProps={{
                        classes: {
                            focused: 'inputLabel',
                            root: 'inputLabel'
                        }
                    }}
                    InputProps={{
                        style: styles.lightFont,
                        startAdornment: this.props?.icon ? (
                            <InputAdornment position="start">
                                <FontAwesomeIcon style={styles.lightFont} icon={this.props.icon} />
                            </InputAdornment>
                        ) : null,

                    }}
                    onKeyDown={(event) => {
                        this.keyDownHandler()
                    }}
                />
                {
                    this.props.error && this.state.isDirty ?
                        <p className='error'><small>{errorMessage}</small></p>
                        : null
                }
            </div >
        );
    }
}


export default InputField;
