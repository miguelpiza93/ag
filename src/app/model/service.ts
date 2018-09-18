import { ServiceType } from "./service-type";

export class Service {
    id: number;
    name: string;
    description: String;
    image: String;
    category: String;
    types: ServiceType[];
}