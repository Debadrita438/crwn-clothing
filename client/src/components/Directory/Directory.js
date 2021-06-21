import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

import MenuItem from '../MenuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.styles';


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

const Directory = ({ sections }) => {
  return (
      <DirectoryMenuContainer>
          {
              sections.map(({  id, ...otherSectionProps }) => (
                  <MenuItem key={ id } { ...otherSectionProps } />
              ))
          }
      </DirectoryMenuContainer>
  );
}

 
export default connect(mapStateToProps)(Directory);