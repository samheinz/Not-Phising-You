var Appointment = React.createClass({
  render: function() {
    return (
      <div className='appointment'>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
        <h3>{this.props.appointment.title}</h3>
      </div>
    )
  }
});
