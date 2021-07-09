import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';

import { CollectionPreviewContainer, PreviewContainer, TitleStyles } from './CollectionPreview.styles';

export const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleStyles onClick={() => history.push(`${match.path}/${ routeName }`)}>
            { title.toUpperCase() }
        </TitleStyles>
        <PreviewContainer>
            {
                items
                    .filter((item, i) => i < 4)
                    .map( item => (
                        <CollectionItem key={ item.id } item={ item } />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

 
export default withRouter(CollectionPreview);