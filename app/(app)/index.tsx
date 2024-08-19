// Index tsx

import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Pressable, View } from "react-native";
import * as Network from 'expo-network';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import Txt from '@/components/UI/UIText';
import PdBlk from '@/components/UI/UIPaddingBlock';
import AppSafeAreaContentWrapper from '@/components/SafeAreaWrappers/AppSafeAreaContentWrapper';
import gss from "@/globalStyles";

interface DeviceInfo {
  ipAddress: string;
  deviceId: string;
}

export default function Index() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fecthing, setFecthing] = useState<boolean>(true);

  useEffect(() => {
    getDeviceInfo();
    getLocation();
  }, []);


  const getDeviceInfo = async () => {
    try {
      const ipAddress = await Network.getIpAddressAsync() || ''; // Network address
      const deviceId = Device.osInternalBuildId || Device.osBuildId || ''; // Unique ID

      const info: DeviceInfo = { ipAddress, deviceId };
      setDeviceInfo(info);
    } catch (error) {
      console.error('Error fetching device info:', error);
      throw error;
    }
  };

  /**
   * Get Location
   * @returns null
   */
  const getLocation = async () => {
    setFecthing(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      uploadLocationToDatabase(location);
    } catch (error) {
      console.error(error);
      setErrorMsg('Error fetching data');
    } finally {
      setFecthing(false);
    }
  };

  /**
   * Upload Location To Database
   * @param location Location.LocationData
   */
  const uploadLocationToDatabase = async (location: any) => {
    try {
      /*
      const docRef = doc(db, "LOCATIONS", deviceInfo.deviceId);
  
      const locationData = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
        speed: location.coords.speed,
        altitude: location.coords.altitude,
        timestamp: location.timestamp,
      };
  
      await setDoc(docRef, locationData);
      */

      console.log("Location data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading location data: ", error);
    }
  };

  return (
    <AppSafeAreaContentWrapper>

      <PdBlk pad={20} />
      <Txt style={gss.mainPageTitle}>GPS Tracker</Txt>
      <PdBlk pad={20} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
        <Txt style={ss.subTitle}>SIT314 GPS Tracker</Txt>
        <PdBlk pad={10} />
        <Pressable onPress={getLocation}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'hsl(0 0% 30%)' : 'hsl(0 0% 20%)', },
          ss.containerCreateNew]}>
          <Txt>Track</Txt>
        </Pressable>

        <PdBlk pad={50} />

        {deviceInfo && (
          <View>
            <Txt>IP Address: {deviceInfo?.ipAddress}</Txt>
            <Txt>Device ID: {deviceInfo?.deviceId}</Txt>
          </View>
        )}

        <PdBlk pad={20} />

        {location && !fecthing && (
          <View>
            <Txt>Latitude: {location.coords.latitude}</Txt>
            <Txt>Longitude: {location.coords.longitude}</Txt>
            <Txt>Accuracy: {location.coords.accuracy}</Txt>
            <Txt>Speed: {location.coords.speed}</Txt>
            <Txt>Altitude: {location.coords.altitude}</Txt>
            <Txt>Timestamp: {location.timestamp}</Txt>
          </View>
        )}

        {!location && fecthing && (
          <View>
            <Txt>Fetching New Data...</Txt>
          </View>
        )}

        {((!location && !fecthing) || errorMsg) && (
          <View>
            <Txt style={{ color: 'red', textAlign: 'center' }}>{errorMsg || 'Failed to fetch data'}</Txt>
          </View>
        )}


      </ScrollView >
    </AppSafeAreaContentWrapper>
  );
}

const ss = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'hsl(0 0% 70%)',
  },
  containerCreateNew: {
    width: '80%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 20,
    borderRadius: 10,
  },
});