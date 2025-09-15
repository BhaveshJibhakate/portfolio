import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #282c35;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 14px 6px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2025 Bhavesh Jibhakate. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
