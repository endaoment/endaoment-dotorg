import React from "react";
import endaoment from "../assets/images/endaoment.svg";
import orgs from "../assets/images/orgs.png";
import grant from "../assets/images/grant.png";
import contribute from "../assets/images/contribute.png";
import fund from "../assets/images/fund.png";
import tax from "../assets/images/tax.png";
import endaomentfund from "../assets/images/endaomentfund.png";
import styled from "styled-components";
import "./splash.scss";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <HomePageWrapper>
          <div className="fullscreen-wrapper">
            <img
              alt="endaoment"
              style={{ maxWidth: "15rem" }}
              src={endaoment}
            ></img>
            <p className="big-header">A new way to give.</p>
            <Subtitle>smart contract donor-advised funds</Subtitle>
            <ButtonBlock>
              <a href="#about" className="ui button compact">
                Learn More
              </a>
              <a
                className="ui button compact green"
                target="blank"
                href="./signup"
              >
                Request Mainnet Access
              </a>
            </ButtonBlock>

            <a
              className="ui button massive blue"
              href="https://rinkeby.endaoment.org"
            >
              <i className="external alternarte icon" />
              Test on Rinkeby
            </a>
          </div>
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
                  provide minimal basic info about yourself and we'll set up
                  your new fund's smart contract in seconds
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
              <a
                className="ui button massive green"
                target="blank"
                href="./signup"
              >
                Request Access
              </a>
              <Header>Keep in touch</Header>
              <Subtitle>
                sign up to recieve notice when our public beta launches
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
  justify-content: center;
  margin: 2rem;
  padding-bottom: 5rem;
`;

const LearnMoreWrapper = styled.div`
  background-color: whitesmoke;
  width: 1200px;
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
  margin: 5rem auto;
  padding: 1rem;
  @media only screen and (max-width: 811px) {
    margin: 2rem auto;
  }
`;

const RightSectionWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 100vw;
  margin: 5rem auto;
  padding: 1rem;
  @media only screen and (max-width: 811px) {
    margin: 2rem auto;
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
  margin: 5rem auto;
  padding: 2rem;
  @media only screen and (max-width: 811px) {
    margin: 2rem auto;
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
  padding: 1rem 0rem 1rem 1rem;
  max-width: 30rem;
`;
