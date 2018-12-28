import styled from 'styled-components'

const TopNav = styled.div`
    width:100%;
    padding:.07rem .07rem .1rem .07rem;
    background-color:#fff;
    .topnav{
        width:100%;
        display:flex;
        align-items:center;
        li{
            flex:1;
            img{
                height: 100%;
                width: 100%;
                display: block;
            }
        }
    }
`

export {
    TopNav
}