import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtZXJzb24gUGVzc29hIiwiaWF0IjoxNTE2MjM5MDIyfQ.7bU95fjYyODbEh1Iog6b3IYCLW7Zl1xT5gAExaswzeA";
    constructor() {}
    estaAutenticado(): boolean {
        return !!sessionStorage.getItem("access-token");
    }

    login(email: string, senha: string): boolean {
        if (email === "admin@gmail.com" && senha === "123456") {
            sessionStorage.setItem("access-token", this.accessToken);
            return true;
        }
        return false;
    }
    logout() {
        sessionStorage.clear();
    }
}
