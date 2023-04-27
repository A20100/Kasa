import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section className="ErrorWrapper">
            <div className="ErrorTitle">404</div>
            <h2 className="ErrorSubtitle">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link to='/Kasa'>
                Retourner sur la page d’accueil
            </Link>
        </section>
    )
}