import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import errorLogo from '../assets/images/404.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
    <div className="text-center max-w-md w-full">
    <div className="mt-5">
      <img
        src={errorLogo}
        alt="Ilustración 404"
        className=""
      />
    </div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Página no encontrada</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        mala suerte! no pudimos encotrar la pagina que buscas.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild className="w-full sm:w-auto">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage