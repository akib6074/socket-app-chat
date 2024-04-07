import { RequestMethod } from "@nestjs/common";

export const publicUrls = [
    { path: "/users/create", method: RequestMethod.POST },
    { path: "/users", method: RequestMethod.GET },
    { path: "/auth/login", method: RequestMethod.POST },
    { path: "/users/seeder", method: RequestMethod.POST },
    { path: "/polls", method: RequestMethod.POST },
];