import './ProductsStyles.css'
function Electronics () {
    return <div>
        <div className="containers">
    <div>
        <span> <a href="/p" className="arrow">&#8592;</a></span>
      </div>
    <header className="header">
        <h1> <a className="headmini" href="/h" >Mini Mart</a> </h1>
      </header>

    <section className="category" >
      <h2>Electronics</h2>
      
    </section>
    

   
  

  <section className="items">
    <article className="item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULSm3e4To_velZ72-lw4qVioWngcTxA5kNQ&s" alt="Electronic Item 1" />
      <h3>Smartphones</h3>
      $<span id="Smartphone-price">155</span>
      <p>Latest smartphones</p>
      <div className="buttons">
        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    </article>
    <article className="item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzjJTze4HzlDvHyT-gXmy2tDyZa9rpHADnQ&s" alt="Electronic Item 2" />
      <h3>Laptops</h3>
      $<span id="Laptops-price">199</span>
      <p>Powerful laptops for work and play</p>
      <div className="buttons">
        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    </article>
    <article className="item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2T0C4jdFpGasdYZ5hvot5_sgf2s3-wzg9Fw&s" alt="Electronic Item 3" />
      <h3>TVs</h3>
      $<span id="TVs-price">59</span>
      <p>High-definition TVs for entertainment</p>
      <div className="buttons">
        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    </article>
    </section>
    <section className="items">
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnRa_OsGX5hO2i79Y3YHiqi6iOfiGvImGlg&s" alt="Electronic Item 4" />
          <h3>SmartWatches</h3>
          $<span id="Smartphone-price">15</span>
          <p>Latest smartwatches</p>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt208pnhff7lYodUdSXHf8cAUxmTPGIBkpLA&s" alt="Electronic Item 5" />
          <h3>Coolers</h3>
          $<span id="Laptops-price">19</span>
          <p>Aircooler</p>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
        <article className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JBWbpwMQnQLOHwVKBb8_fKVmoiJ0pCZQGw&s" alt="Electronic Item 6" />
          <h3> Refrigerator </h3>
          $<span id="TVs-price">80</span>
          <p>High-definition TVs for entertainment</p>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </article>
        </section>
        <section className="items">
            <article className="item">
              <img src="https://5.imimg.com/data5/TM/HS/MY-76155088/whirlpool-1-5-ton-split-ac-3d-cool-hd-500x500.jpg" alt="Electronic Item 7" />
              <h3>ACs</h3>
              $<span id="Smartphone-price">105</span>
              <p>  </p>
              <div className="buttons">
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </article>
            <article className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzjJTze4HzlDvHyT-gXmy2tDyZa9rpHADnQ&s" alt="Electronic Item 8" />
              <h3>Laptops</h3>
              $<span id="Laptops-price">1200</span>
              <p>Powerful laptops for work and play</p>
              <div className="buttons">
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </article>
            <article className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcttk7GzCbcZ7y6-UEr-IcJjSSkvyCp0QDQ&s" alt="Electronic Item 9" />
              <h3>Speakers</h3>
              $<span id="TVs-price">30</span>
              <p>High-definition TVs for entertainment</p>
              <div className="buttons">
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </article>
      </section>
    </div>
    </div>
}
export default Electronics;