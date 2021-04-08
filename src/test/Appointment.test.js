import { render } from '@testing-library/react';
import { Appointment } from '../Appointment';

describe('Appointment', () => {
	it('renders the customer first name', () => {
		const customer = { firstName: 'Bernardo' };
		const { getByText } = render(<Appointment customer={customer} />);
		expect(getByText(customer.firstName)).toBeTruthy();
	});

	it('renders another customer first name', () => {
		const customer = { firstName: 'Bernie' };
		const { getByText } = render(<Appointment customer={customer} />);
		expect(getByText(customer.firstName)).toBeTruthy();
	});

	it('renders a div with the right id', () => {
		const { container } = render(<Appointment />);
		expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
	});
});
