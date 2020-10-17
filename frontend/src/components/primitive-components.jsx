const { default: styled } = require('styled-components');

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  padding-left: 1rem;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders[1]};
  background-color: ${(props) => props.theme.colors.background};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  appearance: none;
  border-style: solid;
  border-radius: 4px;
  color: inherit;
  background-color: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.borders[0]};
  :focus {
    border-color: var(--theme-ui-colors-primary, #33ccff);
    box-shadow: 0 0 0 2px var(--theme-ui-colors-primary, #33ccff);
    outline: none;
  }
`;

export const Box = styled.div`
  margin: 1rem 10rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 40px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-width: ${(props) => props.minWidth || '300px'};
  max-width: ${(props) => props.maxWidth || '350px'};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 8px;
  min-height: 200px;
  cursor: ${(props) => props.cursor || 'inherit'}; ;
`;

export const Heading = styled.h2`
  margin: 0.5rem;
  align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

export const Text = styled.div`
  margin: 1rem;
  align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

export const Anchor = styled.a`
  margin: 1rem;
  align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

export const Image = styled.img`
  margin: 1rem;
  align-self: center;
  max-width: ${(props) => props.maxWidth || '200px'};
`;
