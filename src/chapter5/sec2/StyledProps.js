import styled from 'styled-components';

const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1po solid #000;
    color: white;
    border-radius: ${props => (props.theme.radius ? '10px' : '0px')};
    background-color: ${props => (props.theme.color === 'dark' ? 'black' : 'royalblue')};
`

export default function StyledProps({ theme }) {
    return (
        <MyPanel theme={theme}><b>Styled JSX</b>は、JSX式にスタイル定義を…</MyPanel>
    )
} 