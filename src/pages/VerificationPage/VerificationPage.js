import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import { VerificationContainer } from './VarificationPage.styles';

const VerificationPage = () => (
    <VerificationContainer>
        <SignIn />
        <SignUp />
    </VerificationContainer>
);

export default VerificationPage;