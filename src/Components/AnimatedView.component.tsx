import React from 'react';

const classNames = (...classes: string[]) => {
    return classes.reduce((className: string, nextClass: string) => className + ` ${nextClass}`)
}

export const AnimatedSection = (props: any) => {

    const [toAnimate, setToAnimate] = React.useState(false);

    const scrollHandler = (element: any) => {
        let isInView = IsElementInViewPort(element);
        if (isInView && !toAnimate) {
            setToAnimate(true);
        }
    }

    const IsElementInViewPort = (element: any) => {
        var position = element?.getBoundingClientRect();

        if (position?.top < window?.innerHeight && position?.bottom >= 0) {
            return true;
        } else {
            return false;
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log('scrolling');
            let element = document.getElementById(`animated-${props?.id}`);
            scrollHandler(element);
        })
    }, [])

    return (
        <div id={`animated-${props?.id}`} style={{ width: '100%' }} className={classNames(props?.className, toAnimate ? props.animationClass : '')}>
            {
                props.children
            }
        </div>
    )
}