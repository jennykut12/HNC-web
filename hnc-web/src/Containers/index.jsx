import styled from 'styled-components';


// export const FlexRowContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin-left: ${({ ml }) => ml || 0};
//   margin-right: ${({ mr }) => mr || 0};
//   margin-top: ${({ mt }) => mt || 0};
//   margin-bottom: ${({ mb }) => mb || '16px'};
//   justify-content: ${({ justifyContent }) => justifyContent || 'center'};
//   align-items: center;
// `;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ ml }) => ml || 0};
  margin-right: ${({ mr }) => mr || 0};
  margin-top: ${({ mt }) => mt || 0};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-top: ${({ mt }) => mt || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ align }) => align || 'stretch'};
  width: ${({ width }) => width || 'auto'}
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ ml }) => ml || 0};
  margin-right: ${({ mr }) => mr || 0};
  margin-top: ${({ mt }) => mt || 0};
  margin-bottom: ${({ mb }) => mb || '16px'};
  margin-top: ${({ mt }) => mt || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ align }) => align || 'stretch'};
`;

