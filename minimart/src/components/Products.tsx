import './Products.css'
function Products() {
    return <div>
        <nav>
            
            <ul className="nav-links">
        <li><a href="/h">Home</a></li>
        <li><a href="/">Login</a></li>
        <li className="center"><a href="/p">Products</a></li>
        <li className="forward"><a href="/h/#abo">About Us</a></li>
        
        </ul>
            </nav>
        
    
        <div className="cards row productPadding">
    <div className="card col">
            <a href="/f"><img src="https://lh3.googleusercontent.com/proxy/1t41QOCHVFW4_Mr0l4ESagN_wNSUjUFeBYqRJTB45lsupCDaBR0gE5xiuRDhv77gXMSC8tqtoDDgchlvKwX-1NUEgkTPDxFb1OjeNdEmyhDr" className="card-img-top1"    alt="..." /></a>
           
          </div><div className="card col">
            <a href="/e"><img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309662.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais" className="card-img-top2" alt="..." /></a>
           
          </div><div className="card col">
           <a href="/c"> <img src="https://c0.wallpaperflare.com/preview/192/583/707/black-friday-casual-cheerful-daytime.jpg" className="card-img-top3" alt="..." /></a>
            
            </div>
        
        </div>
    </div>
}
export default Products;