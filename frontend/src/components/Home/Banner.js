import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(null);

  async function handleChange(itemInput) {
    setItem(itemInput);
    console.log(item);

    if (item?.length > 3) {
      const { items } = await agent.Items.byTitle(item);
      console.log(items);
      setItems(items);
    }
  }

  // useEffect(() => {
  //   handleChange();
  // }, [item]);

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
          <div>
            <ul>{items && items.map((i) => <li>{i.title}</li>)}</ul>

            {item && items && items.length === 0 && (
              <div id="empty">
                <div> 😞 </div>
                <p>No items found for "boring {item}".</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
