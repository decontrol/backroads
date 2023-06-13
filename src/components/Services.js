import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = (location) => {
	return (
		<section className='section services' id='services'>
			<Title title='our' titleBlue='services' />
			<div className='section-center services-center'>
				{services.map((service) => {
					return <Service key={service.id} location={location} {...service} />
				})}
			</div>
		</section>
	)
}
export default Services
