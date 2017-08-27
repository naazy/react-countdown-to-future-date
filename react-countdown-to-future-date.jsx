var React   = require('react');
var App = React.createClass({

displayNone: function(e){
    document.getElementById('PopUp').style.display = "none";
    this.props.afterTimeOut();
  },

  getInitialState: function(){
    return {time: new Date(this.props.givenDate)/1000}
  },

  update: function(){
    var newTime = this.state.time - 1; // minus one sec from initial time
    this.setState({time:newTime});
    if(this.state.time ===0){
      clearInterval(this.decr);
      this.props.afterUnmount
    }
  },

  render: function(){

  var formattedGivenDate = new Date(this.props.givenDate);
  var today = new Date();
  var msDiff =formattedGivenDate - today;
  var days = parseInt(msDiff/(24*3600*1000));
  var hours =parseInt(msDiff/(3600*1000)-(days*24));
  var mins = parseInt(msDiff/(60*1000)-(days*24*60)-(hours*60));
  var secs = parseInt(msDiff/(1000)-(mins*60)-(days*24*60*60)-(hours*60*60));

    return(
      <div className="react-countdown-container">
        <h1>{days, " days ", hours," hours ", mins," mins ",  secs, " secs "}</h1>
      </div>
    )
  },
  componentDidMount: function(){
    this.decr = setInterval(this.update,1000)
  },
    
  componentWillUnmount: function(){
    clearInterval(this.decr);
  }
})
module.exports = App;
