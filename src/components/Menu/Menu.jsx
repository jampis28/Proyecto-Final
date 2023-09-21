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
          <h1 id="temper">{Math.round(props.dataDias.wind.speed)} <p id="nomen">mph</p></h1>
          <p id="temper2">WSW</p>
        </div>
        <div className="humidity">
          <p id="windstatus">Humidity</p>
          <h1 id="temper">{Math.round(props.dataDias.main.humidity)} <p id="nomen">%</p></h1>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
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
          <h1 id="temper">{(props.dataDias.visibility * milla).toFixed(2)} <p id="nomen">miles</p></h1>
        </div>
        <div className="Air">
          <p id="windstatus">Air Pressure</p>
          <h1 id="temper">{props.dataDias.main.pressure} <p id="nomen">mph</p></h1>
        </div>
      </div>
    </>
  );
}

export default Menu;
