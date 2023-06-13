const SocialLink = ({ id, href, location, iconClass }) => {
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
}
export default SocialLink
