export class Config {
    static PORT: number = parseInt(process.env.PORT, 10) || 3000;
    static DB: string = process.env.MONGOLAB_URI || "mongodb://localhost/db";
    static SECRET: string = 'super.super.secret.shhh';
}