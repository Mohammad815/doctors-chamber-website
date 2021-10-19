import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h3>How to use the software (quick start guide for doctors)</h3>
            <ul className="list">
                <li>Install the application following the instructions inside Developer Manual</li>
                <li>doctor@example.com Default password: 1234</li>
                <li>Set your schedule for the particular chamber</li>
                <li>Go to appointment menu to add new appointments and you can also see
appointments in the calendar, you can click on any date or any event to bring appointment list for that day on the right part of this page</li>
                <li>From the billing menu, you can create a new invoice for patients which you can print later on and provide to the patient</li>
                <li>From profile, you can change your login credentials and also can change your password.</li>
            </ul>
        </div>
    );
};

export default About;