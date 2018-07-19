import React from 'react';

export default function Privacy(){
    return (
        <div>
            <section>
                <h3>
                    Do you like money?
                </h3>
                <p>
                    I'm guessing that you do. And also that you are pretty careful with it,
                    since you are here to teach your kids about budgeting and money management.
                    You probably want to be sure that your money and your identify are safe if
                    you sign up for this app. Don't worry, I've got you covered
                </p>
            </section>
            <section>
                <h3>
                    Your Personal Information
                </h3>
                <p>
                    I have no desire to hang on to your personal information and I will never pass
                    it on to anyone else. I will store your username and password and your email address.
                    The email address is just so that I can send you updates about the app or possibly 
                    about your kids withdrawal requests. Your password is encrypted and stored securely
                    in a database. There is no actually money involved here, just some numbers to keep track of.
                </p>
            </section>
            <section>
                <h3>
                    But what about YNAB?
                </h3>
                <p>
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
                <p>
                    Sign up for an account or start budgeting with your kids now!
                </p>
            </section>
        </div>
    )
}