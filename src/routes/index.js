import * as React from "react"

/**
 * using lazy loading can improve the performance and
 * user exprience by on loading only the needed components
 */
import { lazy, Suspense } from "react"

// Spinner component for loading fallback
import Spinner from "components/Spinner"

// react-router-dom components
import { Routes, Route, Navigate, useLocation } from "react-router-dom"

const MoviesPage = lazy(() => import("pages/Movies/Movies"))
const MovieDetailsPage = lazy(() => import("pages/Movies/MovieDetails"))

export default function MoviesRouter() {
  const pathname = useLocation()

  // setting the page scroll to 0 when changing  the route
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<MoviesPage />} />
        <Route exact path="/films/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}
