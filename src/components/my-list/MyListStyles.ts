import styled from 'styled-components';
import sizes from '@/utils/sizes';

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  margin-left: 5%;
  ${[sizes.up('lg')]} {
    margin-left: 6%;
  }
  ${[sizes.up('xl')]} {
    font-size: 39.2px;
  }
`;

export const Container = styled.div`
  margin: 0 5% 5% 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
  ${[sizes.up('sm')]} {
    grid-template-columns: repeat(5, 1fr);
  }
  ${[sizes.up('md')]} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${[sizes.up('lg')]} {
    grid-template-columns: repeat(7, 1fr);
    margin: 0 6% 5% 6%;
    grid-gap: 8.4px;
  }
  ${[sizes.up('xl')]} {
    grid-gap: 11.8px;
  }
`;
