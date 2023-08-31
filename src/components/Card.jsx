function Card({ feature, index }) {
	return (
		<li className={`card card__${index + 1}`}>
			<div
				className='card__container'
				style={{ borderTop: `3.55px solid ${feature.color}` }}
			>
				<div className='card__content'>
					<h2 className='card__title'>{feature.title}</h2>
					<p className='card__description'>{feature.description}</p>
				</div>
				<img
					className='card__icon'
					src={feature.icon}
					alt='PLACEHOLDER'
				/>
			</div>
		</li>
	);
}

export default Card;
