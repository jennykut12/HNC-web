import React from 'react';
import styled from "styled-components";
import { Colors } from "../Theme/Variable";
import { HeaderText1 } from "./Text";


const Button = styled.button`
    height: ${({ height})=> height || '65px'};
    border-radius:${({ borderRadius})=> borderRadius || '15px'};
    width: ${({width})=>width || '215px'};
    color: white;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${Colors.buttons.primary.background};
`
// const Primary= styled(Button)`
// background-color:${({enabled})=> enabled? `${Colors.buttons.primary.background}` : `${Colors.buttons.primary.disabled}`};
// `
const Transparent= styled(Button)`
background-color:${({enabled})=> enabled? `${Colors.buttons.primary.background}` : `${Colors.buttons.primary.disabled}`};
`
// const Gradient = styled(Button)`
// background-color: ${({enabled})=> enabled? `${Colors.buttons.gradient.background}` : `${Colors.buttons.gradient.disabled}`};
// `
// const Secondary= styled(Button)`
// background-color: ${({enabled})=> enabled? `${Colors.buttons.secondary.background}` : `${Colors.buttons.gradient.background}`};
// `
// const Outline= styled(Button)`
// background-color: ${({enabled})=> enabled? `${Colors.buttons.outlined.background}` : `${Colors.buttons.outlined.disabled}`};
// `

// export const PrimaryButton = ({ text, onPress, enabled=true }) => {
//     // const dispatch = useDispatch()
//     const onBtnPress = () => {
//         onPress()
//         // dispatch(clearError())
//     }
//     return (
//         <Primary onPress={onBtnPress} disabled={!enabled} enabled={enabled}>
//             <HeaderText2 weight='600' color={Colors.buttons.primary.color}>
//                 {text}
//             </HeaderText2>
//         </Primary>
//     )
// }

export const TransparentButton = ({ text, onPress, enabled=true, width }) => {
    // const dispatch = useDispatch()
    const onBtnPress = () => {
        onPress()
        // dispatch(clearError())
        /* const [hidePassword, setHidePassword] = useState(true) */
    }
    return (
        <Transparent onPress={onBtnPress} disabled={!enabled} enabled={enabled}  width={width} borderRadius="10px" height="40" mb='-12px' >
            <HeaderText1 weight='600' color={Colors.buttons.primary.color}>
                {text}
            </HeaderText1>
        </Transparent>
    )
}


// export const GradientButton = ({ text, onPress, enabled=true }) => {
//     // const dispatch = useDispatch()
//     const onBtnPress = () => {
//         onPress()
//         // dispatch(clearError())
//     }
//     return (
//         <Gradient onPress={onBtnPress} disabled={!enabled} enabled={enabled}>
//             <NormalText weight='600' color={Colors.buttons.gradient.color}>
//                 {text}
//             </NormalText>
//         </Gradient>
//     )
// }

// export const SecondaryButton = ({ text, onPress, enabled=true }) => {
//     // const dispatch = useDispatch()
//     const onBtnPress = () => {
//         onPress()
//         // dispatch(clearError())
//     }
//     return (
//         <Secondary onPress={onBtnPress} disabled={!enabled} enabled={enabled}>
//             <HeaderText2 weight='600' color={Colors.buttons.secondary.color}>
//                 {text}
//             </HeaderText2>
//         </Secondary>
//     )
// }

// export const OutlineButton = ({ text, onPress, enabled=true }) => {
//     // const dispatch = useDispatch()
//     const onBtnPress = () => {
//         onPress()
//         // dispatch(clearError())
//     }
//     return (
//         <Outline onPress={onBtnPress} disabled={!enabled} enabled={enabled}>
//             <HeaderText2 weight='600' color={Colors.buttons.outlined.color}>
//                 {text}
//             </HeaderText2>

//         </Outline>
//     )
// }

