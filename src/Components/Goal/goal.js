import React from 'react';
import Button from '../Button/button'

export default function Goal(){
    return(
        <section>
            <div className='goal-image'>
                {goalImage}
                <Button />
            </div>
            <div className='goal-progress'>
                {progressBar}
            </div>    
        </section>
    )
}