import styled from 'styled-components';
import { Colors, FontSize, Font } from '../Theme/Variable';



export const HeaderText1 = styled.text`
    font-weight:${({ weight }) => weight || '600'};
    font-size: ${`${FontSize.header1}px`};
    line-height:${({ lineHeight }) => lineHeight || '36px' };
    color:${({ color }) => color ||  `${Colors.black}`};
    font-family:${({ font }) => font || `${Font.Bold}`};
    margin-top: ${({ mt }) => mt || '0px'};

`;

export const HeaderText2 = styled.text`
    font-weight:${({ weight }) => weight || '600'};
    font-size: ${`${FontSize.header2}px`};
    line-height:${({ lineHeight }) => lineHeight || '36px' };
    color:${({ color }) => color ||  `${Colors.black}`};
    font-family:${({ font }) => font || `${Font.Bold}`};
    margin-top: ${({ mt }) => mt || '0px'};

`;

export const HeaderText3 = styled.text`
    font-size: ${`${FontSize.header3}px`};
    line-height: ${({ lineHeight }) => lineHeight || '30px' }; 
    font-weight:${({ weight }) => weight || '400'}; 
    color: ${({ color }) => color ||  `${Colors.black}`};
    margin-top: ${({ mt }) => mt || '14px'};
    font-family:${({ font }) => font || `${Font.Bold}`};
    margin-top: ${({ mt }) => mt || '0px'};


`;

export const HeaderText4 = styled.text`
    font-size: ${`${FontSize.header4}px`};
    line-height: ${({ lineHeight }) => lineHeight || '24px' };
    font-weight: ${({ weight }) => weight || '400'};
    color: ${({ color }) => color ||  `${Colors.black}`};
    font-family:${({ font }) => font || `${Font.Bold}`};
    margin-top: ${({ mt }) => mt || '0px'};


`;

export const SubHeaderText = styled.text`
    font-size: ${({ fontSize }) => fontSize || `${FontSize.subheader}px`};
    line-height: ${({ lineHeight }) => lineHeight || '24px' };
    font-weight: ${({ weight }) => weight || '400'};
    color: ${({ color }) => color ||  `${Colors.grey}`};
    font-family:${({ font }) => font || `${Font.SemiBold}`};
    margin-top: ${({ mt }) => mt || '0px'};

`;

export const NormalText = styled.text`
    color: ${({ color }) => color ||  `${Colors.black}`};
    font-weight: ${({ weight }) => weight || '400'};
    font-size: ${`${FontSize.normal1}px`};
    line-height: ${({ lineHeight }) => lineHeight || '20px' };
    margin: ${({ margin }) => margin || 0};
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `${Font.Regular}`};
`;

export const SmallText = styled.text`
    color: ${({ color }) => color || `${Colors.black}`};
    font-weight: ${({ weight }) => weight  || '600'};
    font-size: ${({ fontSize }) => fontSize || FontSize.small}px;
    line-height: ${({ lineHeight }) => lineHeight || '18px' } ;
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `${Font.SemiBold}`};
    margin-top: ${({ mt }) => mt || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};

`;

export const NormalText1 = styled.text`
    color: ${({ color }) => color ||  `${Colors.black}`};
    font-weight: ${({ weight }) => weight || '400'};
    font-size: ${`${FontSize.normal2}px`};
    line-height: ${({ lineHeight }) => lineHeight || '20px' };
    margin: ${({ margin }) => margin || 0};
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `${Font.Regular}`};

`;