import { Avatar, Card, CardContent, CardHeader, Container, Typography } from '@mui/material'
import { useState, useEffect } from "react"

function UserCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setInterval(() => {
            fetch('https://reqres.in/api/users?page=1')
                .then(res => res.json()).then(res => setData(res.data))
        }, 3000);
    }, [])

    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {data?.map((user) => (
                <Card key={user.id} style={{ maxWidth: 345, margin: '20px 0' }}>
                    <CardHeader avatar={<Avatar>{user.avatar}</Avatar>} title={`${user.first_name} ${user.last_name}`} />
                    <CardContent>
                        <Typography variant="caption" style={{ marginBottom: '10px' }}>Email Address: {user.email}</Typography>
                        <Typography variant="body1">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}

export default UserCard