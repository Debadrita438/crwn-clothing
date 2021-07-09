import { withRouter } from 'react-router';

import { 
    BackgroundImageContainer, 
    ContentContainer, 
    MenuItemContainer, 
    SubtitleStyles, 
    TitleStyles 
} from './MenuItem.styles';

export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={ size }
        onClick={ () => history.push(`${match.url}${linkUrl}`) }
    >
        <BackgroundImageContainer imageUrl={ imageUrl } className='background-image' />
        <ContentContainer>
            <TitleStyles>{ title.toUpperCase() }</TitleStyles>
            <SubtitleStyles>SHOP NOW</SubtitleStyles>
        </ContentContainer>
    </MenuItemContainer>
);
 
export default withRouter(MenuItem);