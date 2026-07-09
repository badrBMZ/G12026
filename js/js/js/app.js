// =======================================
// BMZ App Manager v1.0
// =======================================

const App = {

    init() {

        console.log("BMZ Started");

        Auth.restoreSession();

        if (Auth.currentUser) {

            this.showDashboard();

        } else {

            this.showLogin();

        }

    },

    showLogin() {

        const login = document.getElementById("loginPage");

        const app = document.getElementById("app");

        if (login) login.style.display = "flex";

        if (app) app.style.display = "none";

    },

    showDashboard() {

        const login = document.getElementById("loginPage");

        const app = document.getElementById("app");

        if (login) login.style.display = "none";

        if (app) app.style.display = "block";

        const username = document.getElementById("username");

        if (username && Auth.currentUser) {

            username.innerText = Auth.currentUser.name;

        }

    }

};

window.addEventListener("load", () => {

    App.init();

});
