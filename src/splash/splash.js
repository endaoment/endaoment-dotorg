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
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <HomePageWrapper>
          <FullscreenWrapper>
            <HeaderLogo alt="endaoment" src={endaoment}></HeaderLogo>
            <BigHeader className="big-header">a better way to give</BigHeader>
            <Subtitle>Smart Contract Donor-Advised Funds</Subtitle>
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
            <BottomButton href="#about" className="ui button basic compact">
              <i className="arrow down icon" />
              Learn More
            </BottomButton>
          </FullscreenWrapper>
          <LearnMoreWrapper id="about">
            <SectionLabel style={{ backgroundColor: "white" }}>
              <Header>
                The easiest way to support your favorite causes with crypto.
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
                <Subtitle>
                  Contribute any token with a Uniswap exchange contract to your
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
                  Use the proceeds of your contributions to make grant
                  recommendations to any non-profit organization (some
                  restrictions apply)
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <RightSectionWrapper></RightSectionWrapper>
            <SectionLabel>
              <Header>
                The fastest growing philanthropic vehicle is now available to
                the DeFi community.
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
                  taxable events
                </Subtitle>
              </SectionWrapper>
              <SectionWrapper>
                <CenteredEmojiImage
                  alt="Endaoment Fund"
                  src={endaomentfund}
                ></CenteredEmojiImage>
                <SectionHeader>Coming soon...</SectionHeader>
                <Subtitle>
                  A community-wide philanthropic fund governed in part by{" "}
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
              }}
            >
              <Label basic size="small" color="black">
                Try Now
              </Label>
              <br />
              <SectionHeader>Ready to give?</SectionHeader>
              <Subtitle>
                Sign-up for access to the mainnet beta or try out our latest app
                on the Rinkeby test network
              </Subtitle>
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
            </SectionWrapper>
          </LearnMoreWrapper>
          <Footer>
            <SectionWrapper style={{ padding: "0rem" }}>
              <CenteredEmojiImage
                alt="endaoment"
                style={{ maxWidth: "10rem", margin: "0 auto" }}
                src={endaoment}
              />
              <ButtonBlock style={{ padding: "0rem", width: "100vw" }}>
                <a
                  href="http://twitter.com/endaomentdotorg"
                  target="blank"
                  className="ui button compact twitter"
                >
                  <i className="twitter icon"></i>
                  Follow
                </a>

                <a
                  href="http://medium.com/endaomentdotorg"
                  className="ui button compact disabled"
                  target="blank"
                >
                  <i className="medium m icon"></i>
                  Read More
                </a>

                <a
                  href="http://github.com/rheeger/endaoment-client"
                  className="ui button compact black"
                  target="blank"
                >
                  <i className="github icon"></i>
                  GitHub
                </a>
              </ButtonBlock>
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
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 4rem;
  width: 60vw;
  padding-top: 10rem;
  padding-bottom: 5rem;
  @media only screen and (max-width: 811px) {
    width: 80vw;
    padding-top: 7.5rem;
    padding-bottom: 5rem;
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
    padding: 0.1rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin: -3rem 0 0 0;
  max-width: 33vw;
  @media only screen and (max-width: 811px) {
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
  margin: 2rem auto;
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
  @media only screen and (max-width: 811px) {
    padding: 2.5rem;
    text-align: center;
  }
`;
const SectionLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100vw;
  @media only screen and (max-width: 811px) {
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
  @media only screen and (max-width: 811px) {
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
  @media only screen and (max-width: 811px) {
    padding: 0;
    margin: 2rem auto;
  }
`;

const ThreeUp = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
  @media only screen and (max-width: 811px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const SectionHeader = styled.p`
  font-weight: 400;
  font-size: 3rem;
  padding: 1rem 0;
  @media only screen and (max-width: 811px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  width: 500px;
  height: auto;
  max-width: 100vw;
  @media only screen and (max-width: 811px) {
    width: 300px;
  }
`;

const EmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 30rem;
  margin-left: 4rem;
  @media only screen and (max-width: 811px) {
    margin-left: 0;
  }
`;
const CenteredEmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 30rem;
  @media only screen and (max-width: 811px) {
    margin-left: 0;
  }
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
  margin-top: 20vh;

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
const Footer = styled.div`
  background-color: white;
  box-shadow: 0 15px 30px 1px grey;
  padding: 2rem 0 1rem 0;
  width: 100vw;
  dispay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
