import { h, render} from "preact";

const App = () => {
    return (
        <h1>Welcome to devtools</h1>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.body);
});