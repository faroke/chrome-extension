import { h, render} from "preact";

const App = () => {
    return (
        <h1>Welcome to page options</h1>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.body);
});