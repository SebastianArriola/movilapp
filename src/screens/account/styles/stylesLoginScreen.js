import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
    content:{

        marginHorizontal: 35,
        marginTop: 70

    }
    ,
    image:{

        width: "100%",
        height: "55%",
        resizeMode: "contain"

    },
    input:{

        top: -55,
        

    },
    boxButtonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 40
    },
    boxButtonRegister: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 70
    },
    button: {
        backgroundColor: "#002184",
        width: 200,
        borderRadius: 5,
    },
    textButton: {
        fontSize: 12,
        fontWeight: "bold"
    }

})