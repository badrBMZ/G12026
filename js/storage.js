// =======================================
// BMZ Storage Manager v1.0
// =======================================

const BMZStorage = {

    get(key, defaultValue = null) {

        try {

            const value = localStorage.getItem(key);

            return value ? JSON.parse(value) : defaultValue;

        } catch (e) {

            return defaultValue;

        }

    },

    set(key, value) {

        localStorage.setItem(key, JSON.stringify(value));

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    }

};

// ===============================

const STORAGE = {

    BOOKINGS: "bmz_bookings",

    EXPENSES: "bmz_expenses",

    USERS: "bmz_users",

    SESSION: "bmz_session",

    SETTINGS: "bmz_settings",

    APP: "bmz_app"

};

// ===============================

function loadBookings(){

    return BMZStorage.get(STORAGE.BOOKINGS,[]);

}

function saveBookings(data){

    BMZStorage.set(STORAGE.BOOKINGS,data);

}

function loadExpenses(){

    return BMZStorage.get(STORAGE.EXPENSES,[]);

}

function saveExpenses(data){

    BMZStorage.set(STORAGE.EXPENSES,data);

}

function loadSettings(){

    return BMZStorage.get(STORAGE.SETTINGS,{});

}

function saveSettings(data){

    BMZStorage.set(STORAGE.SETTINGS,data);

}
