const UserList = () => {
    const data = [{firstname:"Simritha", lastName:"Reddy", rating:"5"},
    {firstname:"Simritha", lastName:"Reddy", rating:"5"},
    {firstname:"Simritha", lastName:"Reddy", rating:"5"}]

    const tableheader = ["firstName", "lastName", "Rating"];

    return(
        <div>
            <table>
                <tr>
                   {tableheader.map((header)=>{
                    return <th>{header}</th>
                   })}
                </tr>
                {data.map((tabledata)=>{
                    return(
                        <tr>
                            <td>{tabledata.firstname}</td>
                            <td>{tabledata.lastName}</td>
                            <td>{tabledata.rating}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default UserList;