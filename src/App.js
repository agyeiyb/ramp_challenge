import logo from "./logo.svg";
import "./App.css";
import CapturingFlagComponent from "./capturingFlagComponent";
//script I used to get url

/* <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Select all elements with both the 'char' and 'val' classes
      const elements = document.querySelectorAll(
        "code.ramp div.ramp span.ramp i.char"
      );
      let url = "";
      // Loop through each element and get the 'value' attribute
      elements.forEach((element) => {
        // Get the 'value' attribute
        const value = element.getAttribute("value");
        url += value;
        console.log(url);
      });
    });
  </script> */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Capture the Flag</h1>
        <CapturingFlagComponent />
      </header>
    </div>
  );
}

export default App;
