# To run app and server

npm run start

# Start Json.Server

npx json-server data/db.json -m ./node_modules/json-server-auth --port 8000

## <a href='https://react-buy-products.netlify.app/'>Live</a>

This project is deployed in netlify

# <a href='https://react-buy-products.netlify.app/' target="_blank">Live</a>

<div>
<h2>Run project instruction</h2>
<p> install dependencies 'npm install'  and install separately concurrently , 'npm i concurrently'</p>
<p>Run just  json Server <span>  npx json-server data/db.json -m ./node_modules/json-server-auth --port 8000</span> </p>
<p>Run json server and clinet side <span>npm run start</span><p>
<p>It shows a products list, which is from json server </p>
<p>The page has: </p>
<ol>
<li>Category list filter </br>
<img src='./assets/category.gif' target='_blank' alt='category'/>
</li>
<li>Price filter </br>
<img src='./assets/price-filter.gif' target='_blank' alt='price filter'/>
</li>
<li>add products to basket list and payment form </br> <img src='./assets/addProducts.gif' target='_blank' alt='add products' /> </li>
<li>Register form
<img src='./assets/register.gif'  alt='regiter'/>
</li>
<li>Login form </br> <img src='./assets/login.gif' target='_blank'/></li>
</ol>
</div>
