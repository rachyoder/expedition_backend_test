import { Controller, Get } from "@nestjs/common";

@Controller({})

export class AppController {
    @Get("purchase")
    getPurchase() {
        return {
            start_date: new Date(2019, 1, 20, 0),
            end_date: new Date(2019, 4, 20, 0),
            price: 272.95,

        }
    }

    @Get('location')
    getLocationById() {
        return {
            location_name: "Fells Wargo's Parking Lot",
            location_address: "15714 Melrose Ave, Beverly Hills, CA 90201",
            location_spot: "Spot 21"
        }
    }

    @Get("user")
    getUserById() {
        return {
            first_name: "Annie",
            last_name: "Warner",
            role: "Owner",
        }
    }

    @Get("user-purchase")
    getUserPurchase() {
        return {
            start_date: new Date(2019, 1, 20, 0),
            end_date: new Date(2019, 4, 20, 0),
            price: 272.95,
            location_name: "Fells Wargo's Parking Lot",
            location_address: "15714 Melrose Ave, Beverly Hills, CA 90201",
            location_spot: "Spot 21",
            first_name: "Annie",
            last_name: "Warner",
            role: "Owner",
        }
    }
}