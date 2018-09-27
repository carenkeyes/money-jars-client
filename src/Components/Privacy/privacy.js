import React from 'react';
import './privacy.css';

export default function Privacy(){
    return (
        <div className='privacy-statement'>
            <section>
                <h3>
                    Do you like money?
                </h3>
                <p className='content-text'>
                    I'm guessing that you do. And also that you are pretty careful with it,
                    since you are here to teach your kids about budgeting and money management.
                    You probably want to be sure that your money and your identify are safe if
                    you sign up for this app. Don't worry, we've got you covered
                </p>
            </section>
            <section>
                <h3>
                    Your Personal Information
                </h3>
                <p className='content-text'>
                    The only personal information that Money Jars will store is your email, to inform you
                    of updates or changes. Your password is encrypted and stored securely
                    in a database. There is no actually money involved here, just some numbers to keep track of.
                </p>
            </section>
            <section>
                <h3>
                    But what about YNAB?
                </h3>
                <p className='content-text'>
                    So here's the really cool part. Money Jars won't ever see your YNAB logon information.
                    You will tell YNAB that it's cool for Money Jars to see how much money you have 
                    in your budget (specifically we're looking for the kid category that you choose) and 
                    then YNAB gives Money Jars a super secret token (which again is stored securely) which
                    allows us to only see your budget. Not your banking information, not your credit card 
                    numbers, but just the numbers that will make your life a little easier. Money Jars will never
                    have direct contact with your finances.
                </p>
            </section>
            <section>
                <h3>Sound Good?</h3>
                <p className='content-text'>
                    Sign up for an account or start budgeting with your kids now!
                </p>
            </section>
        </div>
    )
}