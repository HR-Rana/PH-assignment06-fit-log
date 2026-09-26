"use client";

import React, {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from "react";


export interface DataContextType {
    todaysPlan: IDatatype[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IDatatype[]>>;
    save: IDatatype[];
    setSave: React.Dispatch<React.SetStateAction<IDatatype[]>>;
}




export const DataContextProvider = createContext<DataContextType | null>(null);












export default function DataContext({
    children,
}: {
    children: ReactNode;
}) {
    const [todaysPlan, setTodaysPlan] = useState<IDatatype[]>([]);
    const [save, setSave] = useState<IDatatype[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);





    // Load data from localStorage
    useEffect(() => {
        try {
            const savedTodaysPlan = localStorage.getItem("todaysPlan");
            const savedData = localStorage.getItem("save");

            if (savedTodaysPlan) {
                setTodaysPlan(JSON.parse(savedTodaysPlan));
            }

            if (savedData) {
                setSave(JSON.parse(savedData));
            }
        } catch (error) {
            console.error("LocalStorage data load error:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save today's plan
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "todaysPlan",
            JSON.stringify(todaysPlan)
        );
    }, [todaysPlan, isLoaded]);

    // Save saved workouts
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "save",
            JSON.stringify(save)
        );
    }, [save, isLoaded]);

    return (
        <DataContextProvider.Provider
            value={{
                todaysPlan,
                setTodaysPlan,
                save,
                setSave,
            }}
        >
            {children}
        </DataContextProvider.Provider>
    );
}