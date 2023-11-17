import React from 'react'
import { Navbar } from '../NavBar/Navbar'
import { SearchForm } from '../SearchForm/SearchForm'

export const header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white">
                <h2 className='header-title text-cspitative'>
                    Find your choise
                </h2><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis tempore quos. Repudiandae odit nostrum sequi similique officia a suscipit dicta delectus fugiat nam esse saepe autem accusamus, dolorum repellendus?</p>
                <SearchForm/>

            </div>
        </header>
    </div>
  )
}
