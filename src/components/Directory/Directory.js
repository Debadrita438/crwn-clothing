import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

const Directory = ({ sections }) => {
  return (
      <div className="directory-menu">
          {
              sections.map(({  id, ...otherSectionProps }) => (
                  <MenuItem key={ id } { ...otherSectionProps } />
              ))
          }
      </div>
  );
}

 
export default connect(mapStateToProps)(Directory);