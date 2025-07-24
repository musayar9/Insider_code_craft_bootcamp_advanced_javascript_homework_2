(async function () {
  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  try {
    if (typeof jQuery === "undefined") {
      await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
    }
    // await loadScript(
    //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
    // );

    await loadCSS(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    );

    $("head").append(`
      <style>
          /* Reset and Box Sizing */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root Font Size */
html {
  font-size: 16px;
}

/* CSS Variables */
:root {
  /* Grey Colors */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;

  /* Primary Colors */
  --primary-50: #a29dff;
  --primary-100: #645cff;
  --primary-200: #4f39f6;

  /* Green Colors*/
  --green-50: #00d492;
  --green-100: #00bc7d;
  --green-200: rgba(48, 209, 88, 0.24);
  --green-300: rgba(42, 173, 75, 0.2);
  --green-400: #30d158; /* DÜZELTİLDİ */

  /* Red Colors*/
  --red-50: #ff637e;
  --red-100: #ff2056;
  --red-200: rgba(255, 59, 48, 0.2);
  --red-300: #ff3b30;

  /* Base Colors */
  --black: #222;
  --white: #ffffff;

  /* Layout */
  --backgroundColor: var(--grey-50);
  --borderRadius-50: 0.6rem;
  --borderRadius-100: 1rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 1200px;
  --view-width: 90vw;

  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
}

/* Base Body */
body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: var(--textColor, var(--grey-700));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Typography */
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-weight: 600;
  font-size: 3rem;
  padding: 1rem;
  color: var(--grey-600);
  text-align: center;
  margin-top: 2rem;
}

ul {
  list-style: none;
}

/*users list style*/
.ins-api-users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem auto;
  max-width: var(--fixed-width);
  width: var(--view-width);
}
.ins-user-container {
  display: grid;
  width: 100%;
  gap: 1rem;
}

/*user-card styles*/
.ins-user-card {
  background-color: white;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
  padding: 0.675rem 1rem;
   transition: var(--transition);
   cursor: pointer;
     position: relative;
}
.ins-user-card:hover {
  transform: translateY(-4px);
  border: 1px solid var(--green-100);
  background-color: var(--green-200);
}

.ins-user-card:hover .ins-name-initials{
transform: scale(1.05);
border-color: var(--white);
color: var(--green-100);
box-shadow: var(--shadow-3);

}

.ins-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
   padding: 0.8rem;
 
}

.ins-name-initials {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 1px solid var(--grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  color: var(--grey-600);
  font-weight: bold;
}


.ins-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.ins-user-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--grey-600);
}

.ins-user-email,
.ins-user-phone {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--grey-500);
}

.fa-phone,
.fa-envelope {
  color: var(--green-100);
  padding-right: 0.3rem;
}

.ins-user-detail{
display: flex;
align-items: center;
justify-content: space-around;
margin: 1.4rem 0;
gap: 1rem;
}


.ins-user-detail-active {
  color: var(--green-100);
}
.ins-user-detail-content {
  text-align: center;
  color: var(--green-100);
  font-weight: bold;
  padding-bottom: 1rem;
}

.ins-user-company,
.ins-user-website {
  display: none;
}


/*delete button styles*/
.ins-delete-user {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid var(--grey-300);
  transition: var(--transition);
  cursor: pointer;
}

.ins-user-card:hover .ins-delete-user {
  background-color: #ffe4e6;
  transform: scale(1.05);
  border-color: var(--white);
  box-shadow: var(--shadow-2);
}

.ins-delete-user:hover .fa-trash {
  transform: translateY(-4px);
}

.ins-delete-user .fa-trash {
  color: var(--red-100);
  transition: var(--transition);
}
/*toastify message styles*/
.message {
  position: fixed;
  top: 5rem;
  right: 2rem;
  padding: 0.625rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.success-message {
  background-color: #e0e7ff;
  color: var(--primary-200);
  border: 2px solid var(--primary-100);
}

.fa-check{
    padding-right: 0.4rem;
}

/*error content styles*/
.ins-error-content {
  margin: 4rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.ins-error-message{
    font-size: 4rem;
    color: var(--red-300);
    font-weight: 600;
}

.ins-error-image {
  height: 24rem;
}
.ins-not-user {
  background-color: var(--white);
  width: var(--view-width);
  max-width: 500px;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.675rem 1rem;
}

.fa-circle-exclamation {
  font-size: 5rem;
  color: var(--red-100);
}

.ins-not-user-message {
  font-size: 1.2rem;
  color: var(--grey-500);
  font-weight: 500;
}

.ins-not-user-button {
  background-color: var(--primary-25);
  border: 1px solid var(--primary-100);
  padding: 0.675rem 1rem;
  border-radius: var(--borderRadius-50);
  width: 50%;
  font-size: 1rem;
  color: var(--primary-200);
  transition: var(--transition);
  cursor: pointer;
  box-shadow: var(--shadow-1);
}

.fa-arrow-rotate-left{
  padding-right: 0.5rem;
}


.ins-not-user-button:hover{
transform: translateY(-4px);
  background-color: var(--primary-50);
  color: var(--white);
  box-shadow: var(--shadow-2);
}
@media screen and (min-width: 768px) {
  .ins-user-container {
    grid-template-columns: repeat(2, 1fr);
  }
 
}

/* Loading Spinner */
.loading-spinner {
  display: none;
  color: var(--green-100);
  font-size: 1rem;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner-animation {
  border: 5px solid var(--grey-100);
  border-top: 5px solid var(--green-100);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-spinner p {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
}

/*responsive design*/

@media screen and (min-width: 992px) {
  .container h1 {
    font-size: 3rem;
  }

  .ins-user-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

      </style>
    `);

    $("body").html(``);
    const $appendLocation = $("<div></div>")
      .addClass("ins-api-users")
      .attr("id", "ins-location");
    $("body").append($appendLocation);

  } catch (err) {
    console.log("err", err);
    alert(err);
  }
})();
