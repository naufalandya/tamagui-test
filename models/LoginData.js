export class LoginData {
    constructor({ token }) {
        this.token = token;
    }

    static fromJson(json) {
        return new LoginData({
            token: json.token,
        });
    }
}
