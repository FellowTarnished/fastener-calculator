import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> CURTAIN WALL FASTENER CALCULATOR!</h1>
      </header>
      <body>
        <form>
          <label for="fastDia"> Fastener Nominal Diameter</label>
          <select name="fastDiameter" id="fastDia">
            <optgroup label="SPACED THREADS">
              <option value="#6-20">#6-20</option>
              <option value="#8-18">#8-18</option>
              <option value="#10-16">#10-16</option>
              <option value="#12-14">#12-14</option>
              <option value="1/4-14">1/4-14</option>
              <option value="5/16-12">5/16-12</option>
              <option value="3/8-12">3/8-12</option>
            </optgroup>
            <optgroup label="UNC THREADS">
              <option value="#6-32">#6-32</option>
              <option value="#8-32">#8-32</option>
              <option value="#10-24">#10-24</option>
              <option value="#12-24">#12-24</option>
              <option value="1/4-20">1/4-20</option>
              <option value="5/16-18">5/16-18</option>
              <option value="3/8-16">3/8-16</option>
            </optgroup>
          </select>
          <div className="type">
            <button type="button">HEX HEAD</button>
            <button type="button">COUNTERSUNK</button>
            <button type="button">UNDERCUT</button>
          </div>
          <label for="fastMat"> Fastener Nominal Diameter</label>
          <select name="fastMaterial" id="fastMat">
            <optgroup label="STEEL">
              <option value="SAE GR. 2">SAE GR. 2</option>
              <option value="SAE GR. 5">SAE GR. 5</option>
            </optgroup>
            <optgroup label="ALUMINUM">
              <option value="#6-32">#6-32</option>
              <option value="#8-32">#8-32</option>
              <option value="#10-24">#10-24</option>
              <option value="#12-24">#12-24</option>
              <option value="1/4-20">1/4-20</option>
              <option value="5/16-18">5/16-18</option>
              <option value="3/8-16">3/8-16</option>
            </optgroup>
          </select>
          <button type="button">SUBMIT</button>
        </form>
      </body>
      <footer>Copyright Ken Metz 2022</footer>
    </div>
  );
}

export default App;
