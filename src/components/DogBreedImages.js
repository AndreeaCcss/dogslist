import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  const { images } = props;
  return (
    <div className="dog-breed-images">
      <Link to="/">Go back to the index</Link>
      <h1>Dogs Breed Images</h1>
      {/* This page will show images of the {props.match.params.breed} breed. */}
      {images && images.map(url => <img src={url} alt="Dog" />)}
      {!images && "Loading..."}
    </div>
  );
}
