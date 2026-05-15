import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { HeroFrase } from './components/HeroFrase'
import { HeroImage } from './components/HeroImage'
import { HeroForm } from './components/HeroForm'
import { Nav } from './components/Nav'
import { SearchBar } from './components/SearchBar'
import { HeaderNav } from './components/HeaderNav'
import { FaSearch } from 'react-icons/fa'





function App(){

return (
  

  <main className="min-h-screen bg-stone-200">
    <HeaderNav/>
    <HeroFrase/>
    <HeroImage/>
    <HeroForm/>
    </main>
    

 
  )
}
export default App



