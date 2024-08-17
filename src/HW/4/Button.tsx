type ButtonPropsType = {
    /*callBack: any // НУЖНО ПРОТИПИЗИРОВАТЬ
    name: any // НУЖНО ПРОТИПИЗИРОВАТЬ*/
    callBack: () => void
    name: string
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack();
    };

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
            {props.name}
        </button>
    );
};
