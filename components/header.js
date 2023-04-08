class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  background-color: #333;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  flex: 1 1 auto;
  /* text-align: right; */
}
header {
  background-color: #333;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
nav a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
nav a:hover {
  color: #4caf50;
}
nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin: 0 10px;
  position: relative;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
}

nav ul li ul {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #333;
}

nav ul li:hover ul {
  display: block;
}

nav ul li ul li {
  width: auto;
  padding: 7px;
  margin: 0;
  border-bottom: 1px solid white;
  font-size: 14px;
}

h1 {
  color: #f2f2f2;
}
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
}

section {
  margin-bottom: 40px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

info {
  position: relative;
  margin-top: 50rem;
}

#info {
  flex: 1;
  top: 10rem;
}

.page {
  position: relative;
}

img {
  display: block;
  margin: 0 auto 20px auto;
}
</style>
        <nav>
            <header>
                <h1>DreamHome Rental Business</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="#">Staff</a>
                        <ul>
                            <li><a href="1)StaffRegForm.html">Register</a></li>
                            <li><a href="2)StaffListing.html">Listing</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Property</a>
                        <ul>
                            <li><a href="3)PropRegForm.html">Register</a></li>
                            <li><a href="5)PropListing.html">Listing</a></li>
                            <li><a href="6)PropViewReport.html">View Report</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Client</a>
                        <ul>
                            <li><a href="4)ClientReg.html">Register</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Lease</a>
                        <ul>
                            <li><a href="7)LeaseForm.html">Lease Form</a></li>
                        </ul>
                    </li>
                </ul>

            </nav>
        </header> `;
  }
}
customElements.define("header-component", Header);
