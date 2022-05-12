import { h, render, Component } from "preact";
function Start(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        const {id} = tabs[0];
        chrome.scripting.executeScript(
            {
                target: {tabId: id},
                func: () => {console.log(document.body.querySelector("div"))},
            },
            (e) => {
                console.log(e)
            });
    });
}

const App = () => {
    return (
        <button onClick={Start}>Start</button>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.body);
});