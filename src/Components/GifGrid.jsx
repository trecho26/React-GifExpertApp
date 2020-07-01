import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated flash">Cargando...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
