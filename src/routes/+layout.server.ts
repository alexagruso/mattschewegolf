import { building } from "$app/environment";
import { connectToDatabase } from "@server/db";

if (!building) {
    connectToDatabase();
}
