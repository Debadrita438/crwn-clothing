import CollectionItem from '../CollectionItem/CollectionItem';

import { CollectionPreviewContainer, PreviewContainer, TitleStyles } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleStyles>{ title.toUpperCase() }</TitleStyles>
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

 
export default CollectionPreview;