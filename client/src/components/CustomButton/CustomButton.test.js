import { shallow } from 'enzyme';

import CustomButton from './CustomButton';

it('should render CustomButton correctly', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
});