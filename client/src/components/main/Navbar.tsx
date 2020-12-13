import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "utilities/context/MainContext";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primaryLight};
  background-color: ${({ theme }) => theme.color.primaryDark};
  display: flex;
  flex-direction: column;

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
    width: 60%;
    margin: 2rem auto;
  }
`;

const LanguageLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LanguageLinks = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 1rem 0 0;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 0 2.5rem;
`;

const LogoMain = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const LogoSub = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TCountry = {
  code: string;
  title: string;
}[]

const Navbar = () => {
  const { setCategory, setCountry, setPageTitle, setTitleCategory  } = useContext(MainContext);

  const countryList: TCountry = [
    { code: "bg", title: "Bulgarian" },
    { code: "de", title: "German" },
    { code: "fr", title: "French" },
    { code: "gb", title: "British" },
    { code: "hu", title: "Hungarian" },
    { code: "it", title: "Italian" },
    { code: "jp", title: "Japanese" },
    { code: "kr", title: "Korean" },
    { code: "se", title: "Swedish" }
  ];

  const renderNavbar = countryList.map(({ code, title }) => {
    const handleOnClick = (): void => {
      setCountry(code);
      setPageTitle(title);
      setTitleCategory("general");
      setCategory("general");
    };

    return (
      <LanguageLinks key={code} onClick={handleOnClick} to={`/country/${code}/category/general`}>{code}</LanguageLinks>
    );
  });

  return (
    <ComponentContainer>
      <LanguageLinksContainer>
        {renderNavbar}
      </LanguageLinksContainer>
      <LogoContainer>
        <LogoMain>_news.Index</LogoMain>
        <LogoSub>the latest & most important news in one place.</LogoSub>
      </LogoContainer>
    </ComponentContainer>
  );
};

export default Navbar;