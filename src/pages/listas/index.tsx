import useHome, { IUsersData } from "@/hooks/home/useHome";
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";

export interface IListProps {
    pendingUsers: IUsersData[];
    confirmedUsers: IUsersData[];
    handleConfirm: (userId: number) => void;
}

export default function List(props: IListProps) {

    const { pendingUsers, confirmedUsers, handleConfirm } = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    pendingUsers.map((user) => (
                        <Grid key={user.id} item xs={12} padding={2}>
                            <Card elevation={4} sx={{ borderRadius: 4 }}>
                                <CardActionArea onClick={() => handleConfirm(user.id)}>
                                    <CardContent>
                                        <Avatar src={user.src} />
                                        <Typography>{user.name}</Typography>
                                        <Typography>{user.email}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item xs={12}>
                {confirmedUsers.map((user) => (
                    <Grid key={user.id} item xs={12} padding={2}>
                        <Card elevation={4} sx={{ borderRadius: 4 }}>
                            <CardContent>
                                <Avatar src={user.src} />
                                <Typography>{user.name}</Typography>
                                <Typography>{user.email}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}