var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return(
    <div className="main">
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li><Link to="/?location=ariana">Ariana, TN</Link></li>
        <li><Link to="/?location=Munich">Munich, DE</Link></li>
      </ol>
    </div>

  )
};

module.exports = Examples;
