import { headers } from "next/headers";


export default function Users(){
    const headerlist = headers();

    const hostname = headerlist.get("host");

    return (
        <div>
            Hello from Hostname: {hostname}
        </div>
    );
}