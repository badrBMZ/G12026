// =======================================
// BMZ Authentication v1.0
// =======================================

const Auth = {

    currentUser: null,

    login(email, password) {

        const users = BMZStorage.get(STORAGE.USERS, []);

        const user = users.find(u =>
            u.email === email &&
            u.password === password
        );

        if (!user) {
            alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
            return false;
        }

        this.currentUser = user;

        BMZStorage.set(STORAGE.SESSION, user);

        return true;
    },

    register(name, email, password) {

        const users = BMZStorage.get(STORAGE.USERS, []);

        if (users.find(u => u.email === email)) {
            alert("هذا البريد مستخدم مسبقاً");
            return false;
        }

        const user = {
            id: crypto.randomUUID(),
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        };

        users.push(user);

        BMZStorage.set(STORAGE.USERS, users);

        BMZStorage.set(STORAGE.SESSION, user);

        this.currentUser = user;

        return true;
    },

    logout() {

        this.currentUser = null;

        BMZStorage.remove(STORAGE.SESSION);

        location.reload();

    },

    restoreSession() {

        this.currentUser = BMZStorage.get(STORAGE.SESSION, null);

        return this.currentUser;

    }

};
