import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};
  font-family: Montserrat;
`

const ErrorTitle = styled.h1`
  font-weight: 700;
  font-size: 288px;
  margin: 66px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  font-size: 36px;
`


export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <Link to='/'>
        Retourner sur la page d’accueil
      </Link>
    </ErrorWrapper>
  )
}