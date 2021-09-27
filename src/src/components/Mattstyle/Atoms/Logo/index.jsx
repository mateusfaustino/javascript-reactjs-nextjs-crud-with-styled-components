import React from 'react'
import { Container } from './styles'
import {ReactComponent as SVGLogo} from '../../../../../assets/logo.svg'
import NextLink from 'next/link';
const Logo = () => {
    return (
        <Container >
            <NextLink href='/'>
                <SVGLogo/>
            </NextLink>
        </Container>
    )
}
export default Logo