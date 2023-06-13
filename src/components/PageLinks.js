import { pageLinks } from '../data'
import PageLink from './PageLink'
const PageLinks = ({ location }) => {
	return (
		<ul className={`${location}-links`} id={`${location}-links`}>
			{pageLinks.map((link) => {
				return <PageLink key={link.id} location={location} {...link} />
			})}
		</ul>
	)
}
export default PageLinks
