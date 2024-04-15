import './ProductsStyles.css'
function Food() {
    return <div>
        <div className="containers">
      <div>
        <span> <a href="/p" className="arrow">&#8592;</a></span>
      </div>
    <header className="header">
      
        <h1> <a className="headmini" href="/h" >Mini Mart</a> </h1>
      </header>

    <section className="category" >
      <h2>Food</h2>
      
    </section>
    

    <section className="items">
      <article className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzk9b0EbF_teeU77JNNT6g44HqaHquB2xFw&s" alt="Food Item 1" />
        <h3>Fresh Fruits</h3>
        <p>A variety of seasonal fruits</p>
        $<span id="fruit-price">5.99</span>
        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      <article className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH3k3Rwd9XDQKBJXD-x6YfBCVfHpZ-lCy2g&s" alt="Food Item 2" />
        <h3>Organic Vegetables</h3>
        $<span id="Vegetables-price">7.99</span>
        <p>Fresh and healthy vegetables</p>

        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      <article className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKaK-DlN7RRlc2cL2R_R8qi966HaEIIfJZg&s" alt="Food Item 3" />
        <h3>Delicious Snacks</h3>
        $<span id="Snacks-price">8.99</span>
        <p>Satisfy your cravings!</p>
        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      </section>

    <section className="items">
      <article className="item">
        <img src="https://media.istockphoto.com/id/520490716/photo/seafood-on-ice.jpg?s=612x612&w=0&k=20&c=snyxGY26viNQ6BWqW-ez4U7tAO65Z_tmAFPMobiZ9Q4=" alt="Food Item 4" />
        <h3>Sea Foods</h3>
        <p>Seafood sensations that make waves</p>
        $<span id="fruit-price">4</span>
        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      <article className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlCMKhilzwwbpyb3-sMZ-XeYm1DHEl-tdxg&s" alt="Food Item 5" />
        <h3>Soft Drinks</h3>
        $<span id="Soft Drinks-price">7</span>
        <p>Cool Refreshing Drinks</p>

        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      <article className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrr9HTCzpFnC78_0ONQKAy2UMAOA2ey_DszQ&s" alt="Food Item 6" />
        <h3>Non-veg</h3>
        $<span id="Non-veg-price">9</span>
        <p>Satisfy your cravings!</p>
        <div className="buttons">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </article>
      </section>
      <section className="items">
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpkqTr9KEkyTfmflLWPQj_6xsnVrRFWBwJg&s" alt="Food Item 7" />
          <h3>Organic Cereals</h3>
          <p>Healthy Food with more proteins</p>
          $<span id="Organic Cereals-price">5</span>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uBf3Gtf5DyMhQvwk7JtzRFTg5wkGyMyEvA&s" alt="Food Item 8" />
          <h3>Junck Foods</h3>
          $<span id="Junck Food-price">2</span>
          <p>Spice Food With Good Tatste</p>
  
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKaK-DlN7RRlc2cL2R_R8qi966HaEIIfJZg&s" alt="Food Item 9" />
          <h3>Delicious Snacks</h3>
          $<span id="Snacks-price">1.99</span>
          <p>Satisfy your cravings!</p>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
  </section>
    </div>
    </div>
}
export default Food;