import { HOC } from '../common/hoc/HOC';
import { RootState } from '../../store';
import { connect } from 'react-redux';
const mapStateToProps = (state: RootState) => ({
  currency: state.currency.value,
});

const AllCategoryPage = HOC('all');
export default connect(mapStateToProps)(AllCategoryPage);
