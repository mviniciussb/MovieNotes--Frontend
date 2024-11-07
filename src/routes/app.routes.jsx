import {Routes, Route} from "react-router-dom"

import { CreateMovie } from "../pages/createMovie"
import { Home } from "../pages/home"
import {MoviePreview} from "../pages/moviePreview"
import {Profile} from "../pages/profile"

export function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createmovie" element={<CreateMovie />} />
        <Route path="/moviepreview/:id" element={<MoviePreview />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
}