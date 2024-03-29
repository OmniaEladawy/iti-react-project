import {Carousel} from "react-bootstrap";

function ProductCarousel() {

    let products1 = [
        {
          id:1,
          title: "Oxygen Cannula",
          price: '50 EG',
          img: 'http://cdn.shopify.com/s/files/1/0045/4216/9201/products/72598bd3dd93dd99faba4b5283341fca_1200x1200.png?v=1571730897'
        },
        {
          id:2,
          title: 'Disposable Foley',
          price: '100 EG',
          img: 'https://p.globalsources.com/IMAGES/PDT/B5155022344/Medical-Foley-Catheter-2-way.jpg'
        },
        {
          id:3,
          title: 'Disposable bed sheet',
          price: '70 EG',
          img: 'https://www.u-phten.com/Uploads/pro/5c1b3602f3d5e.jpg'
        },
        {
          id:4,
          title: 'Suction catheter',
          price: '100 EG',
          img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
        },
        {
          id:5,
          title: 'Feeding Tube',
          price: '100 EG',
          img: 'https://5.imimg.com/data5/EF/DN/MY-2246628/romsons-infant-feeding-tube-500x500.png'
        },
        {
          id:6,
          title: 'Humidification Bottle',
          price: '90 EG',
          img: 'https://image.made-in-china.com/44f3j00WjdTVlsKSebi/200ml-Medical-Oxygen-Humidifier-Bottle.jpg'
        }
      ]

      let products2 = [
        {
            id:7,
            title: 'Guedel Airway',
            price: '20 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg'
          },
          {
            id:8,
            title: 'Connecting tubes',
            price: '100 EG',
            img: 'https://image.made-in-china.com/202f0j00zuyfEmZjlbcF/Ce-ISO-Approved-Suction-Connecting-Tube-with-Yankauer-Handle.jpg'
          },
          {
            id:9,
            title: 'BVF',
            price: '90 EG',
            img: 'https://5.imimg.com/data5/IH/SV/YE/SELLER-59601336/hme-bvf-filter-500x500.jpg'
          },
          {
            id:10,
            title: 'Urine bag',
            price: '90 EG',
            img: 'https://image.made-in-china.com/44f3j00WjdTVlsKSebi/200ml-Medical-Oxygen-Humidifier-Bottle.jpg'
          },
          {
            id:11,
            title: 'Urine bag',
            price: '20 EG',
            img: 'https://cdn.shopify.com/s/files/1/0293/6432/2403/products/romsons-romsons-r-4-urine-bag-with-bottom-outlet-i46-402-db-1092-22998791782573.jpg?v=1623941156'
          },
          {
            id:12,
            title: 'Suction catheter',
            price: '100 EG',
            img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
          },
      ]
	
    return (
	    <Carousel fade>

            <Carousel.Item>
				<div className="carousel-item active">
					<div className="container">
							<div className="row">
                            {
                            products1.map((product,index) => {
                                return (
                                    <div className="col-lg-2" key={product.id}>
                                    <div className="card">
                                    <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{height:'150px'}}
                                        />
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title my-3" style={{color:'#104773',height:'40px'}}>{product.title}</h5>
                                        <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        <p className="card-text my-3" style={{color:'#0da8a7'}}>
                                        {product.price}
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                            }

						</div>
					</div>
					</div>
			
			</Carousel.Item>

            <Carousel.Item>
				<div className="carousel-item active">
					<div className="container">
							<div className="row">
                            {
                            products2.map((product,index) => {
                                return (
                                    <div className="col-lg-2" key={product.id}>
                                    <div className="card">
                                    <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{height:'150px'}}
                                        />
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title my-3" style={{color:'#104773',height:'40px'}}>{product.title}</h5>
                                        <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        <p className="card-text my-3" style={{color:'#0da8a7'}}>
                                        {product.price}
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                            }

						</div>
					</div>
					</div>
			
			</Carousel.Item>
           
		</Carousel>
    );
  }
  
  export default ProductCarousel;