import "./Menu.css";
function Menu(props) {
  const milla = 0.000621371;
  const visibilit = props.dataDias.sys.visibility;
  function visibili() {
    return (visibilit * milla).toFixed(2);
  }
  return (
    <>
      <div id="menus">
        <div className="wind">
          <p id="windstatus">Wind Status</p>
          <h1>{Math.round(props.dataDias.wind.speed)} mph</h1>
          <p>WSW</p>
        </div>
        <div className="humidity">
          <p>Humidity</p>
          <h1>{Math.round(props.dataDias.main.humidity)} %</h1>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: props.dataDias.main.humidity+"%"}}
              aria-valuenow={props.dataDias.main.humidity}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {props.dataDias.main.humidity} %
            </div>
          </div>
        </div>
        <div className="visibility">
          <p id="windstatus">Visibility</p>
          <h1>{(props.dataDias.visibility * milla).toFixed(2)} miles</h1>
        </div>
        <div className="Air">
          <p id="windstatus">Air Pressure</p>
          <h1>{props.dataDias.main.pressure} mph</h1>
        </div>
      </div>
    </>
  );
}

export default Menu;
