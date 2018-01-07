let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility; //Toggle with !
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Det.' : 'Show Det.'}
            </button>
            {
                visibility && (
                    <div>
                        <p>Now you see details....</p>
                    </div>
                )
            }
        </div>
    );

    ReactDOM.render(jsx,document.getElementById('app'))
}



var appRoot = document.getElementById('app');


render();