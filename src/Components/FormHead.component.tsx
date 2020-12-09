import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';


const useStyles = makeStyles({

    title: {
        fontSize: 20,
        marginBottom: 15
    },
    subtitle: {

    },
    imageWrapper: {
        width: 70,
        height: 70,
        margin: '0 auto 10px',
        '& img': {
            width: '100%'
        }
    },

})

export function FormHead(props: any) {

    const [loading, setLoading] = React.useState(false);

    const { loadingText, title } = props;

    React.useEffect(() => {
        setLoading(props?.loading)
    }, [props?.loading])

    const styles = useStyles();

    return (
        <div>
            {
                props?.headImage && (

                    <div className={styles.imageWrapper}>
                        <img src={'/assets/images/FormHeadImage.png'} />
                    </div>
                )
            }
            {
                props?.title && (<Typography className={styles.title} variant={'subtitle1'}>{props.title}</Typography>)
            }
            {
                props?.subtitle && (<Typography className={styles.subtitle} variant={'subtitle1'}>{props.subtitle}</Typography>)
            }
        </div>
    );
}
