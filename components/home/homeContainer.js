import { connect } from 'react-redux';
import { fetchFlights } from '../../actions/flightActions';
import { getDate } from '../../actions/dateActions';
import Home from './home';

const mapStateToProps = ({flightIndex}) => ({
  flightIndex
});

const mapDispatchToProps = dispatch => ({
  fetchFlights: (departAirport, leaveDate, returnDate) => dispatch(fetchFlights(departAirport, leaveDate, returnDate)),
  receiveDate: date => dispatch(getDate(date)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);