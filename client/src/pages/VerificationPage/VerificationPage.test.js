import { shallow } from 'enzyme';

import VerificationPage from './VerificationPage';

it('should render VerificationPage', () => {
    expect(shallow(<VerificationPage />)).toMatchSnapshot();
});