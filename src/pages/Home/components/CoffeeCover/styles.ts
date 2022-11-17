import styled from 'styled-components';
import { PalletsProps } from '../../../../styles/themes';

export const Presentation = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${({ theme }) => theme.default.pallet['base-title']};
    font-size: ${({ theme }) => theme.default.header.font.size.xlarge};
    line-height: 130%;
  }

  p {
    margin-top: 1rem;
    line-height: 130%;
    font-size: ${({ theme }) => theme.default.text.font.size.medium};
  }

  ul {
    gap: 1rem;
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-top: 4rem;
    list-style: none;
    font-size: ${({ theme }) => theme.default.text.font.size.regular};
    
    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      
      p {
        font-size: ${({ theme }) => theme.default.text.font.size.regular};
        line-height: 130%;
        margin: 0;
      }
    }
  }
`;

interface IconWrapperProps {
  color: keyof PalletsProps,
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.default.pallet[props.color]};
  border-radius: 50%;
  padding: 0.5rem;
  
  svg {
    color: ${({ theme }) => theme.default.pallet['white']};
  }
`