import React from 'react'
import { DISCOURSE_CATEGORIES } from "../../constants";
import Scrollspy from 'react-scrollspy';

const ResourceCategoriesMenu = () => {
  const menuItems = DISCOURSE_CATEGORIES.map(category => category.slug)
  return (
    <div
      id="resource-categories-menu"
    >
      <Scrollspy
        className="nav nav-stacked"
        items={menuItems}
        currentClassName="active"
        offset={-64} // top nav height
      >
        { DISCOURSE_CATEGORIES.map(category => {
          return(
            <li key={category.slug}>
              <span className="bullet" />
              <a href={`#${category.slug}`} className="minicaps">{category.title}</a>
            </li>
          )
        })}
      </Scrollspy>
    </div>
  )
}

export default ResourceCategoriesMenu