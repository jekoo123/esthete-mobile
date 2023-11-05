import React, { useState, useRef, useEffect } from "react";

import {
  Image,
  Alert,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import * as Location from "expo-location";
import { API_KEY } from "@env";

import MapView, { Marker } from "react-native-maps";
import { NavBar, SvgType } from "../../components/navbar";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";

//페이지 이동 타입
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  LightMapList: {
    state: string;
    city: string;
    town: string;
  };
};

const LightMap: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 37.557067,
    longitude: 126.971179,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      setCurrentRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      getData(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
      getLocationInfo(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    })();
  }, []);

  const goToCurrentLocation = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setCurrentRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    mapRef.current?.animateToRegion(
      {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };

  const [locationInfo, setLocationInfo] = useState<any>([
    "State",
    "City",
    "Town",
  ]);

  const getLocationInfo = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: API_KEY,
            language: "ko",
          },
        }
      );

      const formattedAddress = response.data.results[0].formatted_address;

      const addressParts = formattedAddress.split(" ");

      const country = addressParts[0] || "";
      const state = addressParts[1] || "";
      const city = addressParts[2] || "";

      setLocationInfo([country, state, city]);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const getData = (lat: number, lon: number) => {
    console.log(lat);
    console.log(lon);

    //위도, 경도로 동별 대표사진 및 갯수 조회
    //URL: photos?latitude={}&longitude={}&radius={}
    //응답:
    // {
    //   {
    //   "latitude" : "",
    //   "longitude" : "",
    //   "state" : "",
    //   "city" : "",
    //   "town" : "",
    //   "thumnail" : "",
    //   "count" : 1
    //   },
    //   {
    //   "latitude" : "",
    //   "longitude" : "",
    //   "state" : "",
    //   "city" : "",
    //   "town" : "",
    //   "thumnail" : "",
    //   "count" : 1
    //   }
    //   }
  };

  const locationDummy = [
    {
      latitude: 37.5342,
      longitude: 126.9947,
      state: "서울특별시",
      city: "이태원",
      town: "어딘가",
      thumnail: require("../../assets/photodummy5.jpg"),
      count: 1,
    },
    {
      latitude: 37.5826,
      longitude: 127.0019,
      state: "서울 특별시",
      city: "혜화",
      town: "어딘가",
      thumnail: require("../../assets/photodummy4.jpg"),
      count: 2,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          height: 40,
        }}
      >
        <Text style={{ fontSize: 16, borderBottomWidth: 0.8, width: 250 }}>
          {locationInfo[0]}, {locationInfo[1]}, {locationInfo[2]}
        </Text>
        <TouchableOpacity onPress={goToCurrentLocation} style={{}}>
          <Icon name="map-marked" size={25} color={"black"} />
        </TouchableOpacity>
      </View>

      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={currentRegion}
        region={currentRegion}
      >
        <Marker
          coordinate={{
            latitude: currentRegion.latitude,
            longitude: currentRegion.longitude,
          }}
          title={"내 위치"}
        />

        {locationDummy.map((e, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: e.latitude,
              longitude: e.longitude,
            }}
            onPress={() =>
              navigation.navigate("LightMapList", {
                state: e.state,
                city: e.city,
                town: e.town,
              })
            }
          >
            <Image
              source={e.thumnail}
              style={{
                width: 50 * e.count,
                height: 50 * e.count,
                borderRadius: 50,
              }}
            />
          </Marker>
        ))}
      </MapView>
      <NavBar type={SvgType.LightMap} />
    </SafeAreaView>
  );
};

export default LightMap;
