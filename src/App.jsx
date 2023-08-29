import './sass/App.scss';
import IconSupervisor from './img/icon-supervisor.svg';
import IconTeamBuilder from './img/icon-team-builder.svg';
import IconKarma from './img/icon-karma.svg';
import IconCalculator from './img/icon-calculator.svg';

const features = [
	{
		title: 'Supervisor',
		description: 'Monitors activity to identify project roadblocks',
		icon: IconSupervisor,
		color: '#00C8C8',
	},
	{
		title: 'Team Builder',
		description:
			'Scans our talent network to create the optimal team for your project',
		icon: IconSupervisor,
		color: '#FF637B',
	},
	{
		title: 'Karma',
		description: 'Regularly evaluates our talent to ensure quality',
		icon: IconKarma,
		color: '#FCAE4A',
	},
	{
		title: 'Calculator',
		description:
			'Uses data from past projects to provide better delivery estimates',
		icon: IconCalculator,
		color: '#549EF2',
	},
];

function App() {
	return (
		<section className='section'>
			<header className='header'>
				<h2 className='header__subheading'>
					Reliable, efficient delivery
				</h2>
				<h1 className='header__heading'>Powered by Technology</h1>
				<p className='header__description'>
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</header>

			<div className='features'>
				<ul className='features__list'></ul>
			</div>
		</section>
	);
}

export default App;
