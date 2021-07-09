import { shallow } from 'enzyme';

import HomePage from './HomePage';

it('should render HomePage', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
});