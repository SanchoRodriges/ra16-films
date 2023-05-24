import React from "react";
import Star from './Star'

function Stars({ count = 0 }) {

  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      { [...Array(count).keys()].map((key) => <Star key={key} />) }
    </ul>
  )
}

export default Stars;