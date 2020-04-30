import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

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
            <BigHeader className="big-header">A better way to give</BigHeader>
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
            <SectionSubtitle>
              how{" "}
              <span
                style={{
                  fontFamily: "all-round-gothic",
                  fontWeight: "600",
                  fontSize: "1.5rem",
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
                  Provide basic info about yourself and we'll create your
                  on-chain donor-advised fund in seconds
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <LeftSectionWrapper>
              <EmojiImage alt="contribute" src={contribute}></EmojiImage>
              <ContentWrapper>
                <SmallLabel>STEP 2</SmallLabel>
                <SectionHeader>Give some crypto</SectionHeader>
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
                <SmallLabel>STEP 3</SmallLabel>
                <SectionHeader>Recommend grants</SectionHeader>
                <Subtitle>
                  Use the proceeds of your contributions to make grant
                  recommendations to any non-profit organization (some
                  restrictions apply)
                </Subtitle>
              </ContentWrapper>
            </RightSectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Orgs" src={orgs}></EmojiImage>
              <Header>Orgs recieve USDC</Header>
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
                to the organization's verified leadership
              </Subtitle>
            </SectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Taxes" src={tax}></EmojiImage>
              <Header>Minimize your taxes</Header>
              <Subtitle>
                Contribute long-term capital gains holdings without creating
                taxable events
              </Subtitle>
            </SectionWrapper>
            <SectionWrapper>
              <EmojiImage alt="Endaoment Fund" src={endaomentfund}></EmojiImage>
              <Header>Coming Soon...</Header>
              <Subtitle>
                A community philanthropic endowment fund governed in part by{" "}
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
                Sign up to recieve access to our public beta or take our alpha
                for a spin on the Rinkeby test network
              </Subtitle>
            </SectionWrapper>
          </LearnMoreWrapper>
          <Footer>
            <SectionWrapper>
              <EmojiImage
                alt="endaoment"
                style={{ maxWidth: "10rem", margin: "0 auto" }}
                src={endaoment}
              />
              <ButtonBlock>
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
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: -3rem;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
    margin-top: -2rem;
  }
`;

const SectionSubtitle = styled.p`
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
  width: 1000px;
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
  margin: 5rem auto;
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
  max-width: 30rem;
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
  padding-top: 2rem;
  width: 100vw;
  dispay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
