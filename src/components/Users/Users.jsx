import React from "react"
import UserCard from './DrowSingleUser'
import AddUserDialog from './AddNewUser'

const Users = () => {
    return (
        <>
            <h1>Users</h1>
            <AddUserDialog/>
            <UserCard />
        </>
    )

}
export default Users