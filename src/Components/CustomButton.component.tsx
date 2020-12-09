import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Theme } from '../Services/App.service';


const useStyles = makeStyles({
    button: {
        border: `2px solid ${Theme.primary}`,
        color: Theme.primary,
        padding: '10px 20px',
        fontWeight: 400,
        margin: 5,
        cursor: 'pointer',
        transition: '.5s',
        textTransform: 'capitalize',
        borderRadius: 0,
        fontSize: 18,
        '&:focus': {
            outline: 'none'
        },
        '&:disabled':{
            border: `2px solid #ccc`,
        },
        '&:hover': {
            color: 'white',
            backgroundColor: Theme.primary+'dd'
        }
    }

})

export function CustomButton(props: any) {

    const [loading, setLoading] = React.useState(false);

    const { loadingText, title } = props;

    React.useEffect(() => {
        setLoading(props?.loading)
    }, [props?.loading])

    const styles = useStyles();

    return (
        <>
            <Button className={styles.button} style={props?.buttonStyles}  {...props}>{

                props?.children ?

                    props.children

                    : loading ?
                        loadingText ?
                            loadingText + '...' : 'Requesting...'
                        : title

            }</Button>
        </>
    );
}
