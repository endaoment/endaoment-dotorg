import React from "react";
import endaoment from "../assets/images/endaoment.svg";
import orgs from "../assets/images/orgs.png";
import grant from "../assets/images/grant.png";
import contribute from "../assets/images/contribute.png";
import fund from "../assets/images/fund.png";
import tax from "../assets/images/tax.png";
import endaomentfund from "../assets/images/endaomentfund.png";
import styled from "styled-components";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <HomePageWrapper>
          <FullscreenWrapper>
            <HeaderLogo alt="endaoment" src={endaoment}></HeaderLogo>
            <BigHeader className="big-header">A better way to give.</BigHeader>
            <Subtitle>smart contract donor-advised funds</Subtitle>
            <ButtonBlock>
              <a
                className="ui button big green"
                style={{ margin: ".25rem" }}
                target="blank"
                href="./signup"
              >
                <i className="lock open icon" />
                Request Access
              </a>
              {typeof window.ethereum !== "undefined" ? (
                <a
                  className="ui button big blue"
                  style={{ margin: ".25rem" }}
                  href="https://rinkeby.endaoment.org"
                >
                  <i className="ethereum icon" />
                  Test on Rinkeby
                </a>
              ) : null}
            </ButtonBlock>
            <BottomButton href="#about" className="ui button compact">
              <i className="arrow down icon" />
              Learn More
            </BottomButton>
          </FullscreenWrapper>
          <LearnMoreWrapper id="about">
            <SectionSubtitle>
              how{" "}
              <span
                style={{
                  fontFamily: "all-round-gothic",
                  fontWeight: "600",
                  fontSize: "1.5rem"
                }}
              >
                endaoment
              </span>{" "}
              works:
            </SectionSubtitle>
            <RightSectionWrapper>
              <EmojiImage alt="fund" src={fund}></EmojiImage>
              <ContentWrapper>
                <SmallLabel>STEP 1</SmallLabel>
                <SectionHeader>Open a fund</SectionHeader>
                <Subtitle>
                  provide basic info about yourself and we'll set up a new fund
                  smart contract in seconds
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <LeftSectionWrapper>
              <EmojiImage alt="contribute" src={contribute}></EmojiImage>
              <ContentWrapper>
                <SmallLabel>STEP 2</SmallLabel>
                <SectionHeader>Give some crypto</SectionHeader>
                <Subtitle>
                  funds accept any token with a Uniswap exchange contract and
                  are traded by{" "}
                  <span
                    style={{
                      fontFamily: "all-round-gothic",
                      fontWeight: "600"
                    }}
                  >
                    endaoment
                  </span>{" "}
                  for USDC when donated
                </Subtitle>
              </ContentWrapper>
            </LeftSectionWrapper>
            <RightSectionWrapper>
              <EmojiImage alt="grant" src={grant}></EmojiImage>
              <ContentWrapper>
                <SmallLabel>STEP 3</SmallLabel>
                <SectionHeader>Offer grants</SectionHeader>
                <Subtitle>
                  use the proceeds of your donations to make grant
                  reccomendations to any non-profit organization (some
                  restrictions apply)
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Orgs" src={orgs}></EmojiImage>
              <Header>Orgs recieve USDC</Header>
              <Subtitle>
                approved grants are easily transfered out to US bank accounts by
                an organization's leadership
              </Subtitle>
            </SectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Taxes" src={tax}></EmojiImage>
              <Header>Minimize your taxes</Header>
              <Subtitle>
                contribute your long-term capital gains holdings for maximum
                deductions
              </Subtitle>
            </SectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Endaoment Fund" src={endaomentfund}></EmojiImage>
              <Header>Coming Soon...</Header>
              <Subtitle>
                a community philanthropic DAO governed by you:{" "}
                <span
                  style={{
                    fontFamily: "all-round-gothic",
                    fontWeight: "600"
                  }}
                >
                  endaoment
                </span>
                's primary advisors
              </Subtitle>
            </SectionWrapper>
            <SectionWrapper>
              <ButtonBlock>
                <a
                  className="ui button big green"
                  style={{ margin: ".25rem" }}
                  target="blank"
                  href="./signup"
                >
                  <i className="lock open icon" />
                  Request Access
                </a>
                {typeof window.ethereum !== "undefined" ? (
                  <a
                    className="ui button big blue"
                    style={{ margin: ".25rem" }}
                    href="https://rinkeby.endaoment.org"
                  >
                    <i className="ethereum icon" />
                    Test on Rinkeby
                  </a>
                ) : null}
              </ButtonBlock>
              <Header>Keep in touch</Header>
              <Subtitle>
                sign up to recieve access to our public beta or take our alpha
                for a spin on the Rinkeby test network
              </Subtitle>
            </SectionWrapper>
          </LearnMoreWrapper>
          <img
            alt="endaoment"
            style={{ maxWidth: "10rem", margin: "0 auto" }}
            src={endaoment}
          ></img>
          <ButtonBlock>
            <a
              href="http://twitter.com/endaomentdotorg"
              target="new"
              className="ui button compact twitter"
            >
              <i className="twitter icon"></i>
              Follow
            </a>

            <a
              href="medium.com/endaomentdotorg"
              className="ui button compact disabled"
            >
              <i className="medium m icon"></i>
              Read More
            </a>
          </ButtonBlock>
        </HomePageWrapper>
      </div>
    );
  }
}

export default Splash;

const HomePageWrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 4rem;
  margin-top: 3rem;
  @media only screen and (max-width: 811px) {
    margin-top: 2rem;
    padding: 1rem;
    font-size: 2rem;
  }
`;

const BigHeader = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 5rem;
  margin-top: 3rem;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 4rem;
    padding: 0.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: -3rem;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
    margin-top: -2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 1.5rem;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

const LearnMoreWrapper = styled.div`
  background-color: whitesmoke;
  width: 1400px;
  max-width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 100vw;
  margin: 7rem auto;
  padding: 1rem;
  @media only screen and (max-width: 811px) {
    margin: 1rem auto;
    text-align: center;
  }
`;

const RightSectionWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 100vw;
  margin: 7rem auto;
  padding: 1rem;
  @media only screen and (max-width: 811px) {
    margin: 1rem auto;
    text-align: center;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 800px;
  max-width: 100vw;
  margin: 7rem auto;
  padding: 1rem;
  @media only screen and (max-width: 811px) {
    margin: 1rem auto;
  }
`;

const SmallLabel = styled.p`
  font-family: all-round-gothic;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 3rem;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;

const SectionHeader = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 4rem;
  text-align: left;
  @media only screen and (max-width: 811px) {
    font-size: 2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  width: 500px;
  height: auto;
  max-width: 100vw;
`;

const EmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 50rem;
`;

const BottomButton = styled.a`
  margin: 0 auto;

  @media only screen and (min-width: 811px) {
    position: absolute;
    bottom: calc(100% - 100vh + 5rem);
  }
`;

const HeaderLogo = styled.img`
  margin-top: -2rem;
  margin-bottom: 2rem;
  max-width: 15rem;
`;

const FullscreenWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  text-align: center;
  margin-top: 30vh;

  @media only screen and (max-width: 811px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0rem;
  }
`;
