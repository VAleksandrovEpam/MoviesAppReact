import './ErrorBoundary.css';

function ErrorBoundary(props) {
    const ErrorText = () => (
        <section>
            <h2 className="error">
            Oops, something whent wrong... We are doing our best to fix the issue
        </h2>
        </section>
    )
    let isEverythingOk = false;

    return <>{isEverythingOk ? props.children : <ErrorText />}</>

} 

export default ErrorBoundary