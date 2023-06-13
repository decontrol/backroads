const PageLink = ({ id, href, text, location }) => {
	return (
		<li key={id}>
			<a href={href} className={`${location}-link`}>
				{text}
			</a>
		</li>
	)
}
export default PageLink
