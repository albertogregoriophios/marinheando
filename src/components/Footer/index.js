import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href = "https://albertogregorio.com/"
            target="_blank"
          >
            {seeMorePWA}
          </a>
          .
        </p>
        <p>
          {maintainedBy}{' '}
          <a
            href="https://twitter.com/marsop_"
            target="_blank"
          >
            @marsop_
          </a>
          . {contributeMessage}{' '}
          <a
            href = "https://github.com/marsop/marinheando"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
