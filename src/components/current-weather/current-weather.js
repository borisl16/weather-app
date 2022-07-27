import './current-weather.css';


const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">25°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details: </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">28°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">6 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">13 %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">9 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather; 