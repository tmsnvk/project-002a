import React, { FunctionComponent } from "react";
import { ItemBody, ItemContainer, ItemPublishedContainer, ItemTitleLink } from "components/commoncomponents";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 80%;
  margin: 0 auto;
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 90%;
  }
`;

const ItemImage = styled.img`
  padding: 3rem 0 1rem 0;
  width: 100%;
`;

type Props = {
  mainNewsData: {
    description: string;
    publishedAt: string;
    source?: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[]
}

const MainNewsItems: FunctionComponent<Props> = ({ mainNewsData }) => {
  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
    return (
      <ItemContainer key={title}>
        {urlToImage !== null ? <ItemImage src={urlToImage} alt={title} /> : null}
        <ItemPublishedContainer publishedAt={publishedAt} source={source} />
        <ItemTitleLink title={title} url={url} />
        <ItemBody description={description} />
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderMainNewsItems}
    </ComponentContainer>
  );
};

export default MainNewsItems;