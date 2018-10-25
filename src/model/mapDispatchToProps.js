import { bindActionCreators } from 'redux';
import actions from 'model/actions';

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default mapDispatchToProps;
