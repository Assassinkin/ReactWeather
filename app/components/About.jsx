var React = require('react');

var About = (props) => {
  return(
    <div className="main">
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on react. I have build this for the Ergonomics course in my university</p>
      <p>Here are some of the touls I used: </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a>- This was the JavaScript framework used.</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a>- I used Open Weather Map api to search for weather data by city name</li>
      </ul>
    </div>

  )
};

module.exports = About;
