import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = () => {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  async function handleChange(itemInput) {

    setItem(itemInput)

    if (item?.length > 3) {
      const { items } = await agent.Items.byTitle(item)
      // const items = await data.json()
      console.log(items)
      setItems(items)
    }
  }

  useEffect(() => {
    handleChange()
  },[item])
  
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input 
            id="search-box" 
            placeholder="What is that you truly desire?"
            onChange={(e) => handleChange(e.target.value)}
          />
          <span> the cool stuff.</span>
          <p>{item}</p>
          <div>
            <ul>
            {items && (items.map(i => (
                <li>{i.title}</li>
              )))
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
