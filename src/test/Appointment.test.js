import { render } from '@testing-library/react';
import { Appointment } from '../Appointment';

describe('Appointment', () => {
	it('renders the customer first name', () => {
		const customer = { firstName: 'Bernardo' };
		const { getByText } = render(<Appointment customer={customer} />);
		expect(getByText('Bernardo')).toBeTruthy()
	});
});
