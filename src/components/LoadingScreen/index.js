import LoadingScreen from "./LoadingScreen";
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  isFetching: state.isFetching
});

export default connect(mapStateToProps, null)(LoadingScreen);