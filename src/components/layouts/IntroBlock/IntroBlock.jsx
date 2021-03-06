import React from 'react';
import styled from 'styled-components';
import WomanImg from '../../../images/woman.jpg';
import Button from '../Button/Button';
const IntroBlock = () => {
    return (
        <IntroSection className="intro_section">
            <div className="container-wrapper">
                <div className="intro_section-first_block">
                    <div className="intro_section-first_block--top_title">
                        Intro
                    </div>
                    <div className="intro_section-first_block--title">
                        Our future
                    </div>
                    <div className="intro_section-first_block--sub_title">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
                        the stars had ceased to twinkle.
                    </div>
                    <div className="intro_section-first_block--text">
                        By the same illusion which lifts the horizon of the sea to the level of the spectator on a
                        hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of
                        an immense dark sphere, whose upper half was strewn with silver.
                    </div>
                    <Button
                        link="#"
                    >
                        Learn more
                    </Button>
                </div>
                <div className="intro_section-second_block">
                    <div className="intro_section-second_block--content">
                        <svg width="58" height="53" viewBox="0 0 58 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.25" d="M25.4297 37.7188C25.1484 39.6875 24.6562 41.5625 23.9531 43.3438C23.25 45.0781 22.4062 46.625 21.4219 47.9844C20.4375 49.2969 19.3594 50.3516 18.1875 51.1484C17.0625 51.8984 15.9141 52.2734 14.7422 52.2734C13.6641 52.2734 12.5391 52.2031 11.3672 52.0625C10.2422 51.875 9.14062 51.6172 8.0625 51.2891C7.03125 50.9141 6.04688 50.4453 5.10938 49.8828C4.17188 49.3203 3.39844 48.6172 2.78906 47.7734C2.41406 47.2578 2.03906 46.6484 1.66406 45.9453C1.33594 45.1953 1.05469 44.3047 0.820312 43.2734C0.632812 42.1953 0.515625 40.9297 0.46875 39.4766C0.46875 38.0234 0.609375 36.3125 0.890625 34.3438C1.3125 31.5312 1.89844 28.8125 2.64844 26.1875C3.44531 23.5156 4.66406 20.8203 6.30469 18.1016C7.99219 15.3828 10.2188 12.5703 12.9844 9.66406C15.7969 6.71094 19.3828 3.54688 23.7422 0.171875L28.5234 6.92188C25.8516 8.9375 23.5781 10.8359 21.7031 12.6172C19.8281 14.3516 18.2812 16.0156 17.0625 17.6094C15.8438 19.1562 14.9297 20.6094 14.3203 21.9688C13.7109 23.2812 13.3359 24.5234 13.1953 25.6953C13.0078 26.8203 13.3125 27.6875 14.1094 28.2969C14.9062 28.8594 15.9609 29.3281 17.2734 29.7031C19.9453 30.4062 22.0312 31.4844 23.5312 32.9375C25.0312 34.3438 25.6641 35.9375 25.4297 37.7188ZM54.6797 37.7188C54.3984 39.6875 53.9062 41.5625 53.2031 43.3438C52.5 45.0781 51.6562 46.625 50.6719 47.9844C49.6875 49.2969 48.6094 50.3516 47.4375 51.1484C46.3125 51.8984 45.1641 52.2734 43.9922 52.2734C41.7891 52.2734 39.5625 51.9453 37.3125 51.2891C35.0625 50.5859 33.2812 49.4141 31.9688 47.7734C31.5938 47.2578 31.2188 46.6484 30.8438 45.9453C30.5156 45.1953 30.2344 44.3047 30 43.2734C29.8125 42.1953 29.6953 40.9297 29.6484 39.4766C29.6484 38.0234 29.7891 36.3125 30.0703 34.3438C30.4922 31.5312 31.1016 28.8125 31.8984 26.1875C32.6953 23.5156 33.9141 20.8203 35.5547 18.1016C37.2422 15.3828 39.4688 12.5703 42.2344 9.66406C45.0469 6.71094 48.6328 3.54688 52.9922 0.171875L57.7734 6.92188C55.1016 8.9375 52.8281 10.8359 50.9531 12.6172C49.0781 14.3516 47.5312 16.0156 46.3125 17.6094C45.0938 19.1562 44.1797 20.6094 43.5703 21.9688C42.9609 23.2812 42.5859 24.5234 42.4453 25.6953C42.2578 26.8203 42.5625 27.6875 43.3594 28.2969C44.1562 28.8594 45.2109 29.3281 46.5234 29.7031C49.1953 30.4062 51.2812 31.4844 52.7812 32.9375C54.2812 34.3438 54.9141 35.9375 54.6797 37.7188Z" fill="#F4F4ED"/>
                        </svg>
                        <div className="intro_section-second_block--text">
                            Commodo sed egestas egestas fringilla phasellus faucibus.
                        </div>
                        <svg className="intro_section-second_block--rotate" width="58" height="53" viewBox="0 0 58 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.25" d="M25.4297 37.7188C25.1484 39.6875 24.6562 41.5625 23.9531 43.3438C23.25 45.0781 22.4062 46.625 21.4219 47.9844C20.4375 49.2969 19.3594 50.3516 18.1875 51.1484C17.0625 51.8984 15.9141 52.2734 14.7422 52.2734C13.6641 52.2734 12.5391 52.2031 11.3672 52.0625C10.2422 51.875 9.14062 51.6172 8.0625 51.2891C7.03125 50.9141 6.04688 50.4453 5.10938 49.8828C4.17188 49.3203 3.39844 48.6172 2.78906 47.7734C2.41406 47.2578 2.03906 46.6484 1.66406 45.9453C1.33594 45.1953 1.05469 44.3047 0.820312 43.2734C0.632812 42.1953 0.515625 40.9297 0.46875 39.4766C0.46875 38.0234 0.609375 36.3125 0.890625 34.3438C1.3125 31.5312 1.89844 28.8125 2.64844 26.1875C3.44531 23.5156 4.66406 20.8203 6.30469 18.1016C7.99219 15.3828 10.2188 12.5703 12.9844 9.66406C15.7969 6.71094 19.3828 3.54688 23.7422 0.171875L28.5234 6.92188C25.8516 8.9375 23.5781 10.8359 21.7031 12.6172C19.8281 14.3516 18.2812 16.0156 17.0625 17.6094C15.8438 19.1562 14.9297 20.6094 14.3203 21.9688C13.7109 23.2812 13.3359 24.5234 13.1953 25.6953C13.0078 26.8203 13.3125 27.6875 14.1094 28.2969C14.9062 28.8594 15.9609 29.3281 17.2734 29.7031C19.9453 30.4062 22.0312 31.4844 23.5312 32.9375C25.0312 34.3438 25.6641 35.9375 25.4297 37.7188ZM54.6797 37.7188C54.3984 39.6875 53.9062 41.5625 53.2031 43.3438C52.5 45.0781 51.6562 46.625 50.6719 47.9844C49.6875 49.2969 48.6094 50.3516 47.4375 51.1484C46.3125 51.8984 45.1641 52.2734 43.9922 52.2734C41.7891 52.2734 39.5625 51.9453 37.3125 51.2891C35.0625 50.5859 33.2812 49.4141 31.9688 47.7734C31.5938 47.2578 31.2188 46.6484 30.8438 45.9453C30.5156 45.1953 30.2344 44.3047 30 43.2734C29.8125 42.1953 29.6953 40.9297 29.6484 39.4766C29.6484 38.0234 29.7891 36.3125 30.0703 34.3438C30.4922 31.5312 31.1016 28.8125 31.8984 26.1875C32.6953 23.5156 33.9141 20.8203 35.5547 18.1016C37.2422 15.3828 39.4688 12.5703 42.2344 9.66406C45.0469 6.71094 48.6328 3.54688 52.9922 0.171875L57.7734 6.92188C55.1016 8.9375 52.8281 10.8359 50.9531 12.6172C49.0781 14.3516 47.5312 16.0156 46.3125 17.6094C45.0938 19.1562 44.1797 20.6094 43.5703 21.9688C42.9609 23.2812 42.5859 24.5234 42.4453 25.6953C42.2578 26.8203 42.5625 27.6875 43.3594 28.2969C44.1562 28.8594 45.2109 29.3281 46.5234 29.7031C49.1953 30.4062 51.2812 31.4844 52.7812 32.9375C54.2812 34.3438 54.9141 35.9375 54.6797 37.7188Z" fill="#F4F4ED"/>
                        </svg>
                    </div>
                    <img  className="intro_section-second_block--image" src={WomanImg} alt="Image"/>
                </div>

            </div>
        </IntroSection>
    );
};
const IntroSection = styled.section`
   &.intro_section{
      position: relative;
      padding-top: 144px;
      .container-wrapper{
        display: flex;
        justify-content: space-between;
      }
      .intro_section-second_block{
        position: relative;
        &--image{
          margin-right: 100px;
        }
        &--rotate{
            transform: rotateZ(180deg);
        }
        &--content{
          &:before{
            content: '';
            display: block;
            background: var(--text-alt-color-lilac);
            width: 60px;
            height: 50px;
            position: absolute;
            top: 0;
            left: -60px;
          }
          position: absolute;
          width: 255px;
          right: -220px;
          top: -50px;
          background: var(--text-alt-color-lilac);
          padding: 54px 57px 54px 129px; 
        }
        &--text{
            margin: 70px 0;
            font-style: italic; 
            font-size: 1.375rem;
            line-height: 40px; 
            align-items: center;  
            color: var(--gray-color);
        }
      }
      .intro_section-first_block{
        width: 40%;
        
        &--top_title{
          font-weight: 800;
          font-size: 0.75rem;
          line-height: 26px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: var(--var-hover);
          margin-top: 30px;
        }
        &--title{
            font-weight: 500;
            font-size: 	2.8125rem; 
            color: var(--text-color);
        } 
        &--sub_title{
            font-weight: 800;
            font-size: 	1.125rem;
            line-height: 29px; 
            color: var(--text-color);
            margin-bottom: 36px;
        } 
        &--text{
          font-size: 1.125rem;
          line-height: 29px;  
          color: var(--text-alt-color);
          margin-bottom: 54px;
        } 
        
        
      }
   }
`;
export default IntroBlock;