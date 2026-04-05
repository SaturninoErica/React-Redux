export const authMiddleware = (store) => (next) => (action) => {

    const getUser = () => {
        try {
            return JSON.parse(localStorage.getItem("user"));
        } catch {
            return null;
        }
    };

    if (action.type === "auth/register") {
        const { email, password } = action.payload;

        if (!email || !password) {
            alert("Заполни все поля!");
            return;
        }

        localStorage.setItem("user", JSON.stringify(action.payload));
    }

    if (action.type === "auth/login") {
        const savedUser = getUser();

        if (!savedUser) {
            alert("Пользователь не найден!");
            return;
        }

        if (savedUser.email !== action.payload.email) {
            alert("Неверный email!");
            return;
        }

        if (savedUser.password !== action.payload.password) {
            alert("Неверный пароль!");
            return;
        }

        console.log("Успешный вход");
    }

    return next(action);
};