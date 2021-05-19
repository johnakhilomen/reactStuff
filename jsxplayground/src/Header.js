import React from 'react'

const menus = ['home', 'about me', 'contact me'];
/**
 * JSX is an expression, so you can save it to a variable and then 
 * reuse it like we did with HeaderComponent
 *  */
const HeaderComponent = (<header>
<nav>
  <ul>
    {
    menus.map((menu, index) => {
    return <li key={index}>{menu}</li>
    })
  }
  </ul>
</nav>
</header>)

const liArray = [];
menus.forEach((menu, index) => {
    liArray.push(<li key={index}>{menu}</li>)
})
const HeaderComponentForEach = (<header>
    <nav>
      <ul>
      {
        [...liArray]
      }
      </ul>
    </nav>
    </header>)

export default function Header() {
    return (
        <div>{HeaderComponentForEach}</div>
    )
}
