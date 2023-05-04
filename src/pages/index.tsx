import { Box, Grid, Tab, Typography } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import List from "./listas";
import useHome, { IUseHome } from "@/hooks/home/useHome";

export default function Home(props: IUseHome) {

    const {
        value,
        handleChange,
        pendingUsers,
        confirmedUsers,
        handleUserConfirmation,
    } = useHome(props)

    console.log(pendingUsers)

    return (
        <Grid container spacing={2} bgcolor={'#81f0f0'}>
            <Grid
                item xs={12}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                height={'100vh'}
            >
                <Typography variant="h5" mt={4} textAlign={'center'} fontWeight={600}>
                    Troque os usuários de pendentes para confirmados!
                </Typography>
                <Grid item xs={12} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Pendentes" value="1" />
                                <Tab label="Confirmados" value="2" />
                            </TabList>
                        </Box>
                        {value === "1" &&
                            <List
                                value={value}
                                pendingUsers={pendingUsers}
                                confirmedUsers={[]}
                                handleChange={handleChange}
                                handleConfirm={handleUserConfirmation}
                            />}
                        {value === "2" &&
                            <List
                                value={value}
                                pendingUsers={[]}
                                confirmedUsers={confirmedUsers}
                                handleChange={handleChange}
                                handleConfirm={handleUserConfirmation}
                            />
                        }
                    </TabContext>
                </Grid>
            </Grid>
        </Grid>
    )
}
