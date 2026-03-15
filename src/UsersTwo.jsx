import { use } from "react";

export default function UsersTwo({ fetchUsers }) {

    const users = use(fetchUsers);

    return(
        <div className="card">
            <h3>User List: {users.length}</h3>

            {
                users.map(user => (
                    <div key={user.id}>
                        <h4>Name: {user.name}</h4>
                        <p>Company: {user.company.name}</p>
                        <p>City: {user.address.city}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}