import React from "react";

export interface IUsersData {
    id: number;
    name: string;
    email: string;
    src: string;
}

export interface IListProps {
    value: number
    pendingUsers: IUsersData[];
    confirmedUsers: IUsersData[];
    handleUserConfirmation: (userId: string) => void;
    handleConfirm: (userId: string) => void;
}

export interface IUseHome {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: string) => void;
    pendingUsers: IUsersData[];
    confirmedUsers: IUsersData[];
    confirmUser: (user: IUsersData) => void;
    handleUserConfirmation: (userId: number) => void;
    handleConfirm: (userId: any) => void;
}


export default function useHome(props: IUseHome) {
    const [value, setValue] = React.useState('1');
    const [pendingUsers, setPendingUsers] = React.useState<IUsersData[]>([
        {
            id: 1,
            name: 'José',
            email: 'jose@me.com',
            src: '/images/avatars/1.png',
        },
        {
            id: 2,
            name: 'Maria',
            email: 'maria@me.com',
            src: '/images/avatars/2.png',
        },
        {
            id: 3,
            name: 'João',
            email: 'joao@me.com',
            src: '/images/avatars/3.png',
        },
        {
            id: 4,
            name: 'Paula',
            email: 'paula@me.com',
            src: '/images/avatars/4.png',
        },
    ]);
    const [confirmedUsers, setConfirmedUsers] = React.useState<IUsersData[]>([]);

    function handleChange(event: React.SyntheticEvent, newValue: string) {
        setValue(newValue);
    }

    function handleUserConfirmation(userId: number) {
        // Aqui encontramos o usuário pelo ID
        const userToConfirm = pendingUsers.find((u) => u.id === userId);
        if (userToConfirm) {
            // Aqui removemos o usuário da lista de "Pendentes"
            setPendingUsers((users) => users.filter((u) => u.id !== userId));
            // Aqui, adicionamos o usuário à lista de "Confirmados"
            setConfirmedUsers((users) => [...users, userToConfirm]);
        }
    }

    return {
        value,
        handleChange,
        pendingUsers,
        confirmedUsers,
        handleUserConfirmation,
    };
}