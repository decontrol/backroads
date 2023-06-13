import { socialLinks } from '../data'
const SocialLinks = ({ location }) => {
	return (
		<ul className={`${location}-icons`}>
			{socialLinks.map((link) => {
				const { id, href, iconClass } = link
				return (
					<li key={id}>
						<a
							href={href}
							target='_blank'
							rel='noreferrer'
							className={`${location}-icon`}
						>
							<i className={`fab ${iconClass}`}></i>
						</a>
					</li>
				)
			})}
		</ul>
	)
}
export default SocialLinks
