/**
 * Global Style Sheet (GSS)
 */

import { StyleSheet } from 'react-native';

const gss = StyleSheet.create({
    // Font Size
    fs12: { fontSize: 12 }, fs14: { fontSize: 14 }, fs16: { fontSize: 16 }, fs18: { fontSize: 18 },
    fs20: { fontSize: 20 }, fs24: { fontSize: 24 }, fs26: { fontSize: 26 }, fs28: { fontSize: 28 },
    fs30: { fontSize: 30 },

    // Font Family
    ffDrukWide: { fontFamily: 'DrukWide' },
    ffCallingCode: { fontFamily: 'CallingCode' },

    // Colors
    cpink: { color: '#FF3EB5' },
    cyellow: { color: '#FFE900' },
    cl30: { color: 'hsl(0 0% 30%)' }, cl40: { color: 'hsl(0 0% 40%)' }, cl50: { color: 'hsl(0 0% 50%)' },
    cl60: { color: 'hsl(0 0% 60%)' }, cl70: { color: 'hsl(0 0% 70%)' }, cl80: { color: 'hsl(0 0% 80%)' },
    cl90: { color: 'hsl(0 0% 90%)' },

    // Background Colors
    cbg: { backgroundColor: 'hsl(0, 0%, 10%)' },

    /**
     * UI Components
     */

    // Container
    containerScreen: {
        flex: 1,
        backgroundColor: 'hsl(0, 0%, 13%)',
    },
    containerContent: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    // Main Page Title
    mainPageTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'DrukWide'
    },
    // Text Default
    textDefault: {
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
        fontFamily: 'CallingCode'
    },
    // Flex Designs
    flexColumnCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default gss;
