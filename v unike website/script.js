document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 1199,
         discount: 1500,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: 'https://www.snitch.co.in/cdn/shop/files/4MST2212-06-M31.jpg?v=1703588347&width=1080' },
      // Add more products as needed

      { price: 999,
        discount: 2000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
        image: 'https://i.pinimg.com/564x/22/3f/5b/223f5b38334fbc56ccd3667751d697f5.jpg' },

        { price: 999,
          discount: 1500,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
          image: 'https://i.pinimg.com/564x/ef/23/83/ef23838bf2e41a4bcffc3b1474bec4b2.jpg' },

          { price: 1500,
            discount: 2500,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
            image: 'https://rukminim2.flixcart.com/image/612/612/klicfww0/lehenga-choli/q/k/v/free-full-sleeve-d-green-raani-lehngha-choli-dholiya-original-imagym4yttxryuag.jpeg?q=70' },

            { price: 1599,
              discount: 2500,
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
              image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/o/c/h/free-full-sleeve-kayra-morpankh-patbro-original-imagpzmt9bfwmsht.jpeg?q=70' },

              { price: 1599,
                discount: 3500,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
                image: 'https://rukminim2.flixcart.com/image/612/612/k8ait8w0/trouser/w/6/p/xxl-v120c6-10368-varanga-original-imafqcbnanhzxhfk.jpeg?q=70' },

                { price: 1159,
                  discount: 1500,
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
                  image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/2/f/e/6-ss23-6-run-seven-sky-blue-original-imagutdfexrf7rqh.jpeg?q=70' },

                  { price: 1559,
                    discount: 2150,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
                    image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/h/b/10-mnhgems04-10-mast-harbour-whtgreen-original-imaguy9fsf8sgsz3.jpeg?q=70' },

                    { price: 1500,
                      discount: 2520,
                      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
                      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/0/0/-original-imagu8rycvrrgtgu.jpeg?q=70' },

                      { price: 999,
                        discount: 1500,
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
                        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70' },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card" >
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View
              </button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container', products);
  });
  


  // shop page code


  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 999,
         discount: 1500,
         description: 'Colossal Checks Maroon Shirt',
         image: 'https://www.snitch.co.in/cdn/shop/files/4MSS2625-03-M21.jpg?v=1704716767&width=1080' },
      // Add more products as needed
      { price: 999,
        discount: 1500,
        description: 'COLOSSAL CHECKS RUSTIC ORANGE SHIRT',
        image: 'https://www.snitch.co.in/cdn/shop/files/4MSS2625-04-M40.jpg?v=1704716802&width=1800' },

        { price: 999,
          discount: 1500,
          description: 'CLYSTER MAROON OVERSHIRT',
          image: 'https://www.snitch.co.in/cdn/shop/files/4MSS2623-03-M32.jpg?v=1703681540&width=1800' },

          { price: 999,
            discount: 1500,
            description: 'MASH WRINKLE MAROON SHIRT',
            image: 'https://www.snitch.co.in/cdn/shop/files/4MSS2418-05-M29.jpg?v=1704093357&width=1800' },

            { price: 1199,
              discount: 1500,
              description: 'GRID ATTIRE BLACK CHECKS SHIRT',
              image: 'https://www.snitch.co.in/cdn/shop/files/4MSS2583-02-M47_1c4cbf05-ea0f-42a5-b18b-dcf80f8edaa2.jpg?v=1704196020&width=1800' },

              { price: 1299,
                discount: 1990,
                description: 'COMBINED PIECE WHITE SNEAKER',
                image: 'https://www.snitch.co.in/cdn/shop/files/IMG_0759.jpg?v=1695036990&width=1800' },

                { price: 1119,
                  discount: 1230,
                  description: 'TRAVERSE ASH GREY CARGO PANT',
                  image: 'https://www.snitch.co.in/cdn/shop/files/4MSO4540-03-3259.jpg?v=1704092542&width=1800' },

                  { price: 1699,
                    discount: 2200,
                    description: 'MID BLUE BAGGY FIT JEANS',
                    image: 'https://www.snitch.co.in/cdn/shop/files/4MSD3582-03-325950.jpg?v=1684158644&width=1800'
                  },

                    { price: 1999,
                      discount: 4000,
                      description: 'MILITARY GREEN LOW TOP SNEAKER',
                      image: 'https://www.snitch.co.in/cdn/shop/files/IMG_0743.jpg?v=1694754718&width=1800' },

                      { price: 999,
                        discount: 1500,
                        description: 'INCISE LOGO RUSTIC ORANGE POLO T-SHIRT',
                        image: 'https://www.snitch.co.in/cdn/shop/files/4MST2178-03-M90.jpg?v=1702206331&width=1800' },

                        
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>₹${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View
              </button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-shop', products);
  });
 

  // woman page code

  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 5192,
         discount: 10000,
         description: 'Camla Teal Dress For Women',
         image: 'https://www.glamly.com/cdn/shop/files/1_796e5ab6-e652-4a99-bcf8-8ff2f814bf25_900x.jpg?v=1686379504' },
      // Add more products as needed
      {
        price: 3590,
         discount: 5000,
         description: 'Camla Barcelona Black Dress For Women',
         image: 'https://www.glamly.com/cdn/shop/files/8_e5ea195b-aa32-4516-a4bf-632ef4dafcd6_1120x.jpg?v=1693893796'
      },

      {
        price: 4569,
         discount: 6250,
         description: 'Camla Green Satin Dress For Women',
         image: 'https://www.glamly.com/cdn/shop/products/2_fc5eaf83-9330-41dc-8cec-841a377d3838_900x.jpg?v=1676968417'
      },

      {
        price: 3689,
         discount: 6000,
         description: 'Camla Barcelona Solid Co-Ord Set For Women',
         image: 'https://www.glamly.com/cdn/shop/products/1_5d593b54-c3a0-4c7f-bb98-27fb410bd50b_900x.jpg?v=1661581960'
      },

      {
        price: 2360,
         discount: 3000,
         description: 'Camla White Mickey Shirt For Women',
         image: 'https://www.glamly.com/cdn/shop/files/8_1bcd533e-92a4-46cd-afee-b46884d4e13a_900x.jpg?v=1693556875'
      },
      {
        price: 5690,
         discount: 7000,
         description: 'Madame Bottle Green Polyester V Neck Jumpsuit',
         image: 'https://www.glamly.com/cdn/shop/files/1_d3274de7-8e1c-4233-b7ab-08295f06d62d_900x.jpg?v=1691472630'
      },

      {
        price: 5963,
         discount: 7960,
         description: 'Madame Green Jump Suits',
         image: 'https://www.glamly.com/cdn/shop/files/8_ecc1adbe-5b86-4568-9e83-eff6cacfd064_900x.jpg?v=1690179937'
      },

      {
        price: 4500,
         discount: 6500,
         description: 'Madame Mint V Neckline Skirt Co-Ord Set',
         image: 'https://www.glamly.com/cdn/shop/files/1_ee042072-a895-4a97-a912-1e7834f54a19_900x.jpg?v=1682597526'
      },

      {
        price: 2560,
         discount: 3150,
         description: 'Camla Lightblue Skirt For Women',
         image: 'https://www.glamly.com/cdn/shop/files/8_8285fc9d-920b-4b9c-b91b-fe1e266219bb_900x.jpg?v=1693904052'
      },

      {
        price: 1060,
         discount: 2650,
         description: 'Madame Black Waist-Belted Coat',
         image: 'https://www.glamly.com/cdn/shop/files/1_cb7f919e-1202-47a3-9fa7-c017d7b2fbca_900x.jpg?v=1703223409'
      },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View</button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-woman', products);
  });
  
  // kids page code 

  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 599,
         discount: 1000,
         description: 'Printed Cotton Regular Fit Boys T-Shirt',
         image: 'https://sslimages.shoppersstop.com/sys-master/images/hb6/h8d/29286982877214/S23JJB2244756WH_WHITE.jpg_230Wx334H' },
      // Add more products as needed
      {
        price: 500,
         discount: 750,
         description: 'Floral Polyester Square Neck Girls Top',
         image: 'https://sslimages.shoppersstop.com/sys-master/images/h84/hfe/29423183003678/A22GD119TPPCHCO_CORAL_alt2.jpg_2000Wx3000H'
      },

      {
        price: 599,
         discount: 1150,
         description: 'Boys Striped Pure Cotton T Shirt  (Green, Pack of 1)         ',
         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/1/w/g/9-10-years-provogue103-bgreenh13-provogue-original-imagh3ybknatwmrg.jpeg?q=70'
      },

      {
         price: 599,
         discount: 950,
         description: 'Boys Regular Fit Solid Curved Collar Casual Shirt',
         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/n/m/12-13-years-001-hg-tax-original-imagwkbbkeucguny.jpeg?q=70'
      },

      {
        price: 550,
         discount: 950,
         description: 'Boys Regular Fit Color Block Spread Collar Casual Shirt',
         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/u/d/u/15-16-years-boys-shirt-zilcon-original-imagzbrrhjwudu9d.jpeg?q=70&crop=false'
      },
      {
        price: 50,
         discount: 150,
         description: 'Boys Tailored Fit Solid Spread Collar Casual Shirt',
         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/t/6/h/11-12-years-bgff-501-fabfarm-original-imags7ggmaebs4xn.jpeg?q=70&crop=false'
      },

      {
        price: 599,
         discount: 1000,
         description: 'Girls Midi/Knee Length Casual Dress  ',
         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/u/t/2/7-8-years-m-c-midi-fuchsiaheart-miss-chief-original-imagmhwzwfxvsvmr.jpeg?q=70&crop=false'
      },

      {
        price: 50,
         discount: 150,
         description: 'Girls Wedding, Festive & Party Kurta and Pallazo Set ',
         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/b/f/z/9-10-years-kaya001-nkv-fashion-original-imagwg5hnqcjwftr.jpeg?q=70&crop=false'
      },

      {
        price: 500,
         discount: 1330,
         description: 'Wommaniya Impex kids new Tissue checks readymade Lehenga choli for girls dress',
         image: 'https://m.media-amazon.com/images/I/61I5WDPSgzL._SX679_.jpg'
      },

      {
        price: 848,
         discount: 1150,
         description: 'Fashion Dream Girls Maxi Length Flared Dress',
         image: 'https://m.media-amazon.com/images/I/81JkZBzVxRL._SY879_.jpg'
      },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View</button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-kids', products);
  });
  

  // man top ware section 

  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '6.jpeg' },
      // Add more products as needed
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View</button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-top-wear', products);
  });
  

  // man bootom wear section


  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '6.jpeg' },
      // Add more products as needed
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View</button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-bottom-wear', products);
  });

  // mans footwear section
  

  document.addEventListener('DOMContentLoaded', function () {
    // Define product data (you can replace it with your actual data)
    const products = [
      { price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '6.jpeg' },
      // Add more products as needed
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },

      {
        price: 50,
         discount: 150,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut!',
         image: '2.jpeg'
      },
    ];
  
    // Function to generate product cards dynamically
    function generateProductCards(containerId, productData) {
      const container = document.getElementById(containerId);
  
      productData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards-row');
  
        card.innerHTML = `
          <div class="card">
            <div class="card-cover">
              <div class="card-text">
                <h2>₹${product.price} <span class="x-price"><del>${product.discount}</del></span></h2>
                <p>${product.description}</p>
              </div>
              <button class="card-btn">Quick View</button>
            </div>
            <a href=""><img src="${product.image}" alt=""></a>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  
    // Call the function to generate product cards
    generateProductCards('product-container-footwear', products);
  });


  // just check my code 

  // Add this code after the previous JavaScript code

let productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("click", function () {
    // Replace "destination.html" with the actual destination page URL
    window.location.href = "product-detail.html";
  });
});



// responsive code  


// function toggleMenu() {
//   const navbarList = document.querySelector('.navbar-list');
//   navbarList.style.display = navbarList.style.display === 'none' ? 'block' : 'none';
//  }
 
//  window.addEventListener('resize', () => {
//   const navbarList = document.querySelector('.navbar-list');
//   const menuBtn = document.querySelector('.menu-btn');
//   if (window.innerWidth <= 768) {
//      navbarList.style.display = 'none';
//      menuBtn.style.display = 'block';
//   } else {
//      navbarList.style.display = 'flex';
//      menuBtn.style.display = 'none';
//   }
//  });

const menuBtn = document.querySelector('.menu-btn');
const navbarList = document.querySelector('.navbar-list');

menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navbarList.classList.toggle('show');
});