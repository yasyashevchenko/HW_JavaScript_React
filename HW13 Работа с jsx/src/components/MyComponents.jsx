import React from "react";

export const MyComponents = {
    
    Body: (props) => {
        return [
            <div>
                <h3>Info about users</h3>
                <ol align="left">
                    {props.user.map((user) =>
                        <li key={user.id}>
                            firstName: {user.firstName}, 
                            lastName: {user.lastName}, 
                            fullName: {user.firstName} {user.lastName},
                            age: {user.age + 5},
                            job: {user.job}
                        </li>
                    )}
                </ol>
            </div>
        ]
    },
};

