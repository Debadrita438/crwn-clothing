import { shallow } from 'enzyme';

import { Directory } from './Directory';

it('should render Directory Component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});