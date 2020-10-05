import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Label } from "semantic-ui-react";

import endaoment from "../assets/images/endaoment.svg";
import orgs from "../assets/images/orgs.png";
import grant from "../assets/images/grant.png";
import contribute from "../assets/images/contribute.png";
import fund from "../assets/images/fund.png";
import tax from "../assets/images/tax.png";
import endaomentfund from "../assets/images/endaomentfund.png";

class Splash extends React.Component {
  render() {
    ReactGA.initialize("UA-179546802-4");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <HomePageWrapper>
          <FullscreenWrapper>
            <HeaderLogo alt="endaoment" src={endaoment}></HeaderLogo>
            <BigHeader>Give crypto. Grant dollars.</BigHeader>
            <Subtitle style={{ maxWidth: "70vw" }}>A new Community Foundation offering smart contract-powered Donor-Advised Funds.</Subtitle>
            <a
              className="ui button massive green"
              style={{ marginTop: "5rem", marginBottom: "-2rem" }}
              target="blank"
              href="https://app.endaoment.org"
            >
              <i className="arrow right icon" style={{ marginLeft: "-.5rem", marginRight: "1rem" }} />
                Launch App
              </a>
            <ButtonBlock style={{ marginTop: "4rem" }}>
              <a
                className="ui button big purple"
                style={{ margin: ".5rem" }}
                target="blank"
                href="https://discord.gg/9xZCgca"
              >
                <i className="discord icon" />
                Join Discord
              </a>
              <a
                className="ui button big"
                style={{ margin: ".5rem" }}
                target="blank"
                href="https://docs.endaoment.org/"
              >
                <i className="file alternate outline icon" />
                Learn More
              </a>
              <a
                className="ui button big blue"
                style={{ margin: ".5rem" }}
                target="blank"
                href="https://ropsten.endaoment.org/"
              >
                <i className="ethereum icon" />
                Test on Ropsten
              </a>
            </ButtonBlock>
          </FullscreenWrapper>
          <LearnMoreWrapper id="about">
            <SectionLabel style={{ backgroundColor: "white" }}>
              <Header>
                Support your favorite causes & organizations in USD while
                donating your crypto in its original form.
              </Header>
            </SectionLabel>
            <RightSectionWrapper>
              <EmojiImage alt="fund" src={fund}></EmojiImage>
              <ContentWrapper>
                <Label basic size="tiny" color="black">
                  STEP 1
                </Label>
                <SectionHeader>Open a fund</SectionHeader>
                <Subtitle>
                  Provide basic info about yourself and we'll create your
                  on-chain donor-advised fund in seconds
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <LeftSectionWrapper>
              <EmojiImage alt="contribute" src={contribute}></EmojiImage>
              <ContentWrapper>
                <Label basic size="tiny" color="black">
                  STEP 2
                </Label>
                <SectionHeader>Give crypto</SectionHeader>
                <LeftMarginAdjust>

                  <Subtitle>
                    Contribute ETH or ERC20 tokens to your
                  fund and{" "}
                    <span
                      style={{
                        fontFamily: "all-round-gothic",
                        fontWeight: "600",
                      }}
                    >
                      endaoment
                  </span>{" "}
                  will convert it to USDC
                </Subtitle>
                </LeftMarginAdjust>
              </ContentWrapper>
            </LeftSectionWrapper>
            <RightSectionWrapper>
              <EmojiImage alt="grant" src={grant}></EmojiImage>
              <ContentWrapper>
                <Label basic size="tiny" color="black">
                  STEP 3
                </Label>
                <SectionHeader>Recommend grants</SectionHeader>
                <Subtitle>
                  Use the USDC proceeds from your donation to make grant
                  recommendations to nearly any non-profit organization
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <RightSectionWrapper></RightSectionWrapper>
            <SectionLabel>
              <Header>
                The fastest growing philanthropic vehicle is coming to the DeFi
                community.
              </Header>
            </SectionLabel>
            <ThreeUp>
              <SectionWrapper>
                <CenteredEmojiImage alt="Orgs" src={orgs}></CenteredEmojiImage>
                <SectionHeader>Orgs receive USDC</SectionHeader>
                <Subtitle>
                  Approved grants are safely transferred by{" "}
                  <span
                    style={{
                      fontFamily: "all-round-gothic",
                      fontWeight: "600",
                    }}
                  >
                    endaoment
                  </span>{" "}
                  to verified leadership
                </Subtitle>
              </SectionWrapper>
              <SectionWrapper>
                <CenteredEmojiImage alt="Taxes" src={tax}></CenteredEmojiImage>
                <SectionHeader>You minimize taxes</SectionHeader>
                <Subtitle>
                  Contribute long-term capital gains holdings without creating
                  taxable events*
                </Subtitle>
              </SectionWrapper>
              <SectionWrapper>
                <CenteredEmojiImage
                  alt="Endaoment Fund"
                  src={endaomentfund}
                ></CenteredEmojiImage>
                <SectionHeader>Get Involved</SectionHeader>
                <Subtitle>
                  We'll be launching a community-wide philanthropic fund governed in part by{" "}
                  <span
                    style={{
                      fontFamily: "all-round-gothic",
                      fontWeight: "600",
                    }}
                  >
                    endaoment
                  </span>
                  's users
                </Subtitle>
              </SectionWrapper>
            </ThreeUp>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper
              style={{
                width: "80vw",
                backgroundColor: "white",
                margin: "0rem",
                paddingTop: "3rem",
                borderRadius: "4px",
              }}
            >
              <Label basic size="small" color="black">
                Try Now
              </Label>
              <br />
              <SectionHeader>Ready to give?</SectionHeader>
              <Subtitle>
                Create a Fund today using our application, learn more from our documentation, or test our latest build on Ropsten
              </Subtitle>
              <ButtonBlock>
                {typeof window.ethereum !== "undefined" ? (
                  <a
                    className="ui button big green"
                    style={{ margin: ".5rem" }}
                    href="https://app.endaoment.org"
                  >
                    <i className="arrow right icon" style={{ marginLeft: "-.5rem", marginRight: "1rem" }} />
                    Launch App
                  </a>
                ) : null}
                <a
                  className="ui button big"
                  style={{ margin: ".5rem" }}
                  target="blank"
                  href="https://docs.endaoment.org"
                >
                  <i className="file outline alternate icon" />
                  Learn More
                </a>
                <a
                  className="ui button big blue"
                  style={{ margin: ".5rem" }}
                  target="blank"
                  href="https://ropsten.endaoment.org/"
                >
                  <i className="ethereum icon" />
                Test on Ropsten
              </a>
              </ButtonBlock>
            </SectionWrapper>
          </LearnMoreWrapper>
          <Footer>
            <SectionWrapper style={{ padding: "0rem", margin: "1rem" }}>
              <p style={{ color: "gray", maxWidth: "60vw" }}>	&copy; 2020, Endaoment</p>
              <ButtonBlock style={{ padding: "0rem", width: "100vw" }}>
                <a
                  className="ui button compact purple"
                  target="blank"
                  href="https://discord.gg/9xZCgca"
                >
                  <i className="discord icon" />
                Discord
                </a>
                <a
                  href="http://docs.endaoment.org"
                  className="ui button compact"
                  target="blank"
                >
                  <i className="file alternate outline icon"></i>
                Docs
              </a>
                <a
                  href="http://twitter.com/endaomentdotorg"
                  target="blank"
                  className="ui button compact twitter"
                >
                  <i className="twitter icon"></i>
                Follow
              </a>
                <a
                  href="http://github.com/endaoment"
                  className="ui button compact black"
                  target="blank"
                >
                  <i className="github icon"></i>
                GitHub
              </a>
              </ButtonBlock>
              <p style={{ fontStyle: "italic", color: "gray", maxWidth: "60vw" }}>*Endaoment does not provide tax advice. Please consult with a licensed tax professional to further understand the impact of opening and contributing to a Donor-Advised Fund.</p>

            </SectionWrapper>
          </Footer>
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
  padding: 0 2rem;
  width: 100vw;
  box-sizing: border-box;
  @media only screen and (max-width: 1000px) {
    padding: 0rem;
  }
`;

const FullscreenWrapper = styled.div`
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  text-align: center;
  margin-top: 15vh;
  padding: 0 1rem;
  @media only screen and (max-width: 1000px) {
    height: 100vh;
    justify-content: center;
    margin-top: 0rem;
  }
`;

const LearnMoreWrapper = styled.div`
  background-color: whitesmoke;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
`;

const LeftMarginAdjust = styled.div`
margin: -3rem 0 -2rem 3rem;
@media only screen and (max-width: 1000px) {
  margin: -2rem auto

}
`
const LeftSectionWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: right;
  width: 100vw;
  padding: 5rem;
  @media only screen and (max-width: 1000px) {
    padding: 2.5rem;
    text-align: center;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  margin: 2.5rem auto;
  @media only screen and (max-width: 1000px) {
    padding: 0;
    margin: 2rem auto;
  }
`;

const RightSectionWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100vw;
  margin: 0rem auto;
  padding: 5rem;
  @media only screen and (max-width: 1000px) {
    padding: 2.5rem;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  width: 500px;
  height: auto;
  max-width: 100vw;
  @media only screen and (max-width: 1000px) {
    width: 300px;
  }
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 3rem;
  width: 70vw;
  padding-top: 10rem;
  padding-bottom: 5rem;
  @media only screen and (max-width: 1000px) {
    width: 80vw;
    padding-top: 7.5rem;
    padding-bottom: 5rem;
    font-size: 2rem;
  }
`;

const BigHeader = styled.p`
  font-weight: 400;
  font-size: 5rem;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 4rem;
    padding: 0.1rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin: -3rem 0 0rem 0;
  max-width: 33vw;
  @media only screen and (max-width: 1000px) {
    max-width: 70vw;
    font-size: 1rem;
    margin: -2rem 0 0 0;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const SectionLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100vw;
  @media only screen and (max-width: 1000px) {
  }
`;

const ThreeUp = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const SectionHeader = styled.p`
  font-weight: 400;
  font-size: 2.5rem;
  padding: 1rem 0;
  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const EmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 30rem;
  margin-left: 4rem;
  @media only screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;
const CenteredEmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 22rem;
  @media only screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

const BottomButton = styled.a`
  margin: 0 auto;

  @media only screen and (min-width: 1000px) {
    position: absolute;
    bottom: calc(100% - 100vh + 3rem);
  }
`;

const HeaderLogo = styled.img`
  margin-top: -2rem;
  margin-bottom: 2rem;
  max-width: 15rem;
`;


const Footer = styled.div`
  background-color: white;
  padding: 2rem 0 1rem 0;
  width: 100vw;
  dispay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
