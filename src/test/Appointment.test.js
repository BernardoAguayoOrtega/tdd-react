import { render } from '@testing-library/react';
iport { Appoinment } from '../src/Appointment'

describe('Appointment', () => {
	it('renders the customer first name', () => {
		const customer = { firstName: 'Bernardo' };
		render(<Appointment customer={customer} />);
		expect(document.body.textContent).toMatch('Bernardo');
	});
});
